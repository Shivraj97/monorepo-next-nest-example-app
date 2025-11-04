import { Body, Controller, Get, Post } from '@nestjs/common';
import type { CreateProductRequest, Product } from '@repo/types';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  createProduct(@Body() createProductRequest: CreateProductRequest): Product {
    return this.productsService.createProduct(createProductRequest);
  }

  @Get()
  getProducts(): Product[] {
    return this.productsService.getProducts();
  }
}
