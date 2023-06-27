import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdatePromotionDto {
  @IsString()
  @IsOptional()
  promotionName: string;
  @IsNumber()
  @IsOptional()
  discountPrice: number;
  @IsString()
  @IsOptional()
  product: string[];
  @IsNumber()
  @IsOptional()
  qty: number;
  @IsString()
  @IsOptional()
  category: string;
}
