import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Products } from './schemas/products.schema';
import mongoose, { Model } from 'mongoose';
import { ProductDto } from './dto/products.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Products.name) private readonly productModel: Model<Products>,
  ) {}

  async getProducts(): Promise<Products[]> {
    return await this.productModel.find({});
  }

  async getProduct(id: string): Promise<Products> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException(
        'Wrong product ID!, Please, enter correct product ID.',
      );
    }

    const product = await this.productModel.findById(id);

    if (!product) {
      throw new HttpException('Product not found.', HttpStatus.NOT_FOUND);
    }

    return product;
  }

  async crateProduct(product: ProductDto): Promise<Products> {
    const res = await this.productModel.create(product);

    return res;
  }

  async updateProduct(id: string, product: ProductDto): Promise<Products> {
    const res = await this.productModel.findByIdAndUpdate(id, product, {
      new: true,
      runValidators: true,
    });

    return res;
  }

  async deleteProduct(id: string): Promise<Products> {
    return await this.productModel.findByIdAndDelete(id);
  }
}
