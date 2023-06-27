import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CartService } from './cart.service';
import { Carts } from './schemas/cart.schema';
import { CurrentUser } from '../auth/decorator/current-user.decorator';
import { User } from '../auth/schemas/user.schema';
import { ItemDto } from './dto/item.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('addOrder')
  @UseGuards(AuthGuard())
  async AddItemsToCart(
    @CurrentUser() user: User,
    @Body() itemsDto: ItemDto[],
  ): Promise<Carts> {
    return this.cartService.addItemToCart(user, itemsDto);
  }
}
