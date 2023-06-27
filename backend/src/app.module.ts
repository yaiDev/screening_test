import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { PromotionsModule } from './promotions/promotions.module';
import { MemberModule } from './member/member.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    ProductsModule,
    AuthModule,
    CartModule,
    PromotionsModule,
    MemberModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
