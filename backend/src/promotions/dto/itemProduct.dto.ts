import { IsNumber, IsString } from 'class-validator';
import { Products } from '../../products/schemas/products.schema';

export class ItemProductsDto {
  @IsString()
  product: string;
}
