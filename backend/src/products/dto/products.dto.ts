import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class ProductDto {
  @IsNotEmpty()
  @IsString()
  readonly productName: string;
  @IsNumber()
  readonly price: number;
}
