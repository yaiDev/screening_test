import { IsNumber, IsString, IsOptional } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  readonly productName: string;
  @IsNumber()
  @IsOptional()
  readonly price: number;
}
