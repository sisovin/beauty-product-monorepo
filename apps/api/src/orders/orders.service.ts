import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const order = await this.prismaService.order.create({
      data: createOrderDto,
    });
    return order;
  }

  async findAll(): Promise<Order[]> {
    return this.prismaService.order.findMany();
  }

  async findOne(id: string): Promise<Order> {
    return this.prismaService.order.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateOrderDto: UpdateOrderDto): Promise<Order> {
    const order = await this.prismaService.order.update({
      where: { id },
      data: updateOrderDto,
    });
    return order;
  }

  async remove(id: string): Promise<void> {
    await this.prismaService.order.delete({
      where: { id },
    });
  }
}
