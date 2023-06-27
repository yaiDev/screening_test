import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Promotion } from './schemas/promotion.schema';
import mongoose, { Model } from 'mongoose';
import { PromotionDto } from './dto/promotion.dto';
import { UpdatePromotionDto } from './dto/update_promotion.dto';
import { ItemProductsDto } from './dto/itemProduct.dto';

@Injectable()
export class PromotionsService {
  constructor(
    @InjectModel(Promotion.name)
    private readonly promotionModel: Model<Promotion>,
  ) {}

  async getPromotions(): Promise<Promotion[]> {
    return await this.promotionModel.find({});
  }

  async getPromotionById(id: string): Promise<Promotion> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException(
        'Wrong product ID!, Please, enter correct product ID.',
      );
    }

    const res = await this.promotionModel.findById(id).populate('product');

    if (!res) {
      throw new NotFoundException('Promotion not found.');
    }

    return res;
  }

  async createPromotion(data: PromotionDto): Promise<Promotion> {
    const newPromotion = await this.promotionModel.create(data);

    return newPromotion;
  }

  async updatePromotion(
    id: string,
    data: UpdatePromotionDto,
  ): Promise<Promotion> {
    const res = await this.promotionModel.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    return res;
  }

  async removePromotion(id: string): Promise<Promotion> {
    const res = await this.promotionModel.findByIdAndRemove(id);

    return res;
  }

  async findPromotionByProducts(
    itemProductDto: ItemProductsDto,
  ): Promise<Promotion> {
    const { product } = itemProductDto;

    console.log(product.toString());

    const promotion = await this.promotionModel.findOne({
      product: product.toString(),
    });

    console.log(promotion);

    return promotion;
  }
}
