import { IsNumber, IsString } from 'class-validator';
import { Products } from '../../products/schemas/products.schema';

export class ItemDto {
  @IsString()
  product: string;

  @IsNumber()
  quantity: number;
}
