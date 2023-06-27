import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class PromotionDto {
  @IsString()
  promotionName: string;
  @IsNumber()
  discountPrice: number;
  @IsArray()
  product: string[];
  @IsNumber()
  @IsOptional()
  qty: number;
  @IsString()
  category: string;
}
