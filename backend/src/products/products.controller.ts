import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Products } from './schemas/products.schema';
import { ProductDto } from './dto/products.dto';
import { UpdateProductDto } from './dto/update-products.dto';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from '../auth/decorator/current-user.decorator';
import { User } from '../auth/schemas/user.schema';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  @UseGuards(AuthGuard())
  async GetAllProduct(@CurrentUser() user: User): Promise<Products[]> {
    console.log(user);
    return this.productService.getProducts();
  }

  @Get(':id')
  async GetProduct(@Param('id') id: string): Promise<Products> {
    return this.productService.getProduct(id);
  }

  @Post()
  async CreateProduct(@Body() productDto: ProductDto): Promise<Products> {
    return this.productService.crateProduct(productDto);
  }

  @Put(':id')
  async UpdateProduct(
    @Param('id') id: string,
    @Body() productDto: UpdateProductDto,
  ): Promise<Products> {
    await this.productService.getProduct(id);
    const product = await this.productService.updateProduct(id, productDto);

    return product;
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string): Promise<{ deleted: boolean }> {
    await this.productService.getProduct(id);
    const product = await this.productService.deleteProduct(id);

    if (product) {
      return { deleted: true };
    }

    return { deleted: false };
  }
}
