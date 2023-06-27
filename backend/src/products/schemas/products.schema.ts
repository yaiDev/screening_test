import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from '../../auth/schemas/user.schema';

@Schema({ versionKey: false, timestamps: true })
export class Products extends Document {
  @Prop()
  productName: string;

  @Prop()
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Products);
