import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CartSchema } from './schemas/cart.schema';
import { AuthModule } from '../auth/auth.module';
import { PromotionsService } from '../promotions/promotions.service';
import { PromotionsModule } from '../promotions/promotions.module';
import { ProductsModule } from '../products/products.module';
import { MemberModule } from '../member/member.module';

@Module({
  imports: [
    AuthModule,
    PromotionsModule,
    ProductsModule,
    MemberModule,
    MongooseModule.forFeature([{ name: 'Carts', schema: CartSchema }]),
  ],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
