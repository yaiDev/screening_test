import { Module } from '@nestjs/common';
import { PromotionsService } from './promotions.service';
import { PromotionsController } from './promotions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PromotionSchema } from './schemas/promotion.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Promotion', schema: PromotionSchema }]),
  ],
  providers: [PromotionsService],
  controllers: [PromotionsController],
  exports: [PromotionsService],
})
export class PromotionsModule {}
