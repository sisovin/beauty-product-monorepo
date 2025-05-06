import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const product = await this.prismaService.product.create({
      data: createProductDto,
    });
    return product;
  }

  async findAll(): Promise<Product[]> {
    return this.prismaService.product.findMany();
  }

  async findOne(id: string): Promise<Product> {
    return this.prismaService.product.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
    const product = await this.prismaService.product.update({
      where: { id },
      data: updateProductDto,
    });
    return product;
  }

  async remove(id: string): Promise<void> {
    await this.prismaService.product.delete({
      where: { id },
    });
  }
}
