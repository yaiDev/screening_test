import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PromotionsService } from './promotions.service';
import { Promotion } from './schemas/promotion.schema';
import { PromotionDto } from './dto/promotion.dto';
import { UpdatePromotionDto } from './dto/update_promotion.dto';

@Controller('promotions')
export class PromotionsController {
  constructor(private readonly promotionService: PromotionsService) {}

  @Get()
  async GetPromotions(): Promise<Promotion[]> {
    return this.promotionService.getPromotions();
  }

  @Get(':id')
  async GetPromotionById(@Param('id') id: string): Promise<Promotion> {
    return this.promotionService.getPromotionById(id);
  }

  @Post()
  async CreatePromotion(
    @Body() promotionDto: PromotionDto,
  ): Promise<Promotion> {
    console.log(promotionDto);
    return this.promotionService.createPromotion(promotionDto);
  }

  @Put(':id')
  async UpdatePromotion(
    @Param('id') id: string,
    @Body() updateDto: UpdatePromotionDto,
  ): Promise<Promotion> {
    await this.GetPromotionById(id);
    const res = this.promotionService.updatePromotion(id, updateDto);

    return res;
  }

  @Delete(':id')
  async DeletePromotion(
    @Param('id') id: string,
  ): Promise<{ deleted: boolean }> {
    const promotion = this.promotionService.removePromotion(id);

    if (promotion) {
      return { deleted: true };
    }

    return { deleted: false };
  }
}
