import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Carts } from './schemas/cart.schema';
import { Model } from 'mongoose';
import { User } from '../auth/schemas/user.schema';
import { ItemDto } from './dto/item.dto';
import { PromotionsService } from '../promotions/promotions.service';
import { ProductsService } from 'src/products/products.service';
import { isEmpty } from 'class-validator';
import { ItemOrderDto } from './dto/itemOrder.dto';
import { MemberService } from '../member/member.service';
import { Members } from '../member/schemas/member.schema';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Carts.name) private readonly cartModel: Model<Carts>,
    private readonly promotionSrv: PromotionsService,
    private readonly productSrv: ProductsService,
    private readonly memberSrv: MemberService,
  ) {}

  async createCart(
    user: User,
    itemDto: ItemOrderDto[],
    totalBill: number,
  ): Promise<Carts> {
    const mem = this.checkMember(user);
    let discount = 0;
    let total = totalBill;

    if (mem) {
      discount = totalBill * (10 / 100);
      total = totalBill - discount;
    }

    const newCart = await this.cartModel.create({
      owner: user,
      items: [{ ...itemDto }],
      discount: discount.toFixed(0),
      total: total.toFixed(2),
    });

    return newCart;
  }

  async getCart(user: User): Promise<Carts> {
    const cart = await this.cartModel.findOne({ owner: user._id });

    return cart;
  }

  async checkMember(user: User): Promise<Members> {
    const member = this.memberSrv.getMemberByUser(user);

    if (isEmpty(member)) {
      return null;
    }

    return member;
  }

  async deleteCart(user: User): Promise<Carts> {
    const res = await this.cartModel.findByIdAndRemove({ owner: user._id });

    return res;
  }

  async recalculateCart(itemDto: ItemOrderDto[]) {
    let total = 0;
    itemDto.forEach((item) => {
      total += item.totalPrice;
    });

    return total;
  }

  async addItemToCart(user: User, itemDto: ItemDto[]): Promise<Carts> {
    const itemOrder = [];

    for (let i = 0; i < itemDto.length; i++) {
      const e = itemDto[i];
      const pdData = await this.productSrv.getProduct(e.product);

      const promotion = await this.promotionSrv.findPromotionByProducts({
        product: pdData._id,
      });

      const subTotalPrice = pdData.price * e.quantity;

      let discountPrice = 0;
      if (!isEmpty(promotion)) {
        if (e.quantity >= promotion.qty && promotion.qty !== 0) {
          discountPrice = subTotalPrice * (promotion.discountPrice / 100);
        }
      }

      const totalPrice = subTotalPrice - discountPrice;

      itemOrder.push({
        product: e.product,
        price: pdData.price,
        quantity: e.quantity,
        discount: discountPrice,
        subTotalPrice: subTotalPrice,
        totalPrice: totalPrice,
      });
    }

    const sumBill = await this.recalculateCart(itemOrder);

    const newCart = await this.createCart(user, [...itemOrder], sumBill);
    return newCart;
  }
}
