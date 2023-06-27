import { IsNumber, IsString } from 'class-validator';

export class ItemOrderDto {
  @IsString()
  product: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  price: number; // product price

  @IsNumber()
  discount: number; // promotion discount

  @IsNumber()
  subTotalPrice: number; // price before discount

  @IsNumber()
  totalPrice: number; // total price after discount
}
