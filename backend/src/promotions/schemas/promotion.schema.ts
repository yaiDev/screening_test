import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Products } from '../../products/schemas/products.schema';

export enum PromotionType {
  MEMBERCARD = 'membercard',
  SALE = 'sale',
}

@Schema({ versionKey: false, timestamps: true })
export class Promotion extends Document {
  @Prop()
  promotionName: string;

  @Prop()
  discountPrice: number;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Products' }])
  product: Products[];

  @Prop({ default: 0 })
  qty: number;

  @Prop()
  category: PromotionType;
}

export const PromotionSchema = SchemaFactory.createForClass(Promotion);
