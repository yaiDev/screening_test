import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from '../../auth/schemas/user.schema';
import mongoose, { Document } from 'mongoose';

export interface ItemOrder {
  product: string;
  quantity: number; // order quamtity
  price: number; // product price
  discount: number; // promotion discount
  subTotalPrice: number; // price before discount
  totalPrice: number;
}

@Schema({ versionKey: false, timestamps: true })
export class Carts extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  owner: User;

  @Prop()
  items: ItemOrder[];

  @Prop()
  discount: number;

  @Prop()
  total: number;
}

export const CartSchema = SchemaFactory.createForClass(Carts);
