import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from '../src/orders/orders.service';
import { PrismaService } from '../src/prisma/prisma.service';
import { CreateOrderDto } from '../src/orders/dto/create-order.dto';
import { UpdateOrderDto } from '../src/orders/dto/update-order.dto';
import { Order } from '@prisma/client';

describe('OrdersService', () => {
  let service: OrdersService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrdersService,
        {
          provide: PrismaService,
          useValue: {
            order: {
              create: jest.fn(),
              findMany: jest.fn(),
              findUnique: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<OrdersService>(OrdersService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new order', async () => {
      const createOrderDto: CreateOrderDto = {
        userId: '1',
        productId: '1',
        quantity: 2,
        total: 100,
      };

      const order: Order = {
        id: '1',
        userId: createOrderDto.userId,
        productId: createOrderDto.productId,
        quantity: createOrderDto.quantity,
        total: createOrderDto.total,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(prismaService.order, 'create').mockResolvedValue(order);

      const result = await service.create(createOrderDto);

      expect(result).toEqual(order);
      expect(prismaService.order.create).toHaveBeenCalledWith({
        data: createOrderDto,
      });
    });
  });

  describe('findAll', () => {
    it('should return an array of orders', async () => {
      const orders: Order[] = [
        {
          id: '1',
          userId: '1',
          productId: '1',
          quantity: 2,
          total: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      jest.spyOn(prismaService.order, 'findMany').mockResolvedValue(orders);

      const result = await service.findAll();

      expect(result).toEqual(orders);
      expect(prismaService.order.findMany).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single order', async () => {
      const order: Order = {
        id: '1',
        userId: '1',
        productId: '1',
        quantity: 2,
        total: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(prismaService.order, 'findUnique').mockResolvedValue(order);

      const result = await service.findOne('1');

      expect(result).toEqual(order);
      expect(prismaService.order.findUnique).toHaveBeenCalledWith({
        where: { id: '1' },
      });
    });
  });

  describe('update', () => {
    it('should update an order', async () => {
      const updateOrderDto: UpdateOrderDto = {
        quantity: 3,
        total: 150,
      };

      const order: Order = {
        id: '1',
        userId: '1',
        productId: '1',
        quantity: updateOrderDto.quantity,
        total: updateOrderDto.total,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(prismaService.order, 'update').mockResolvedValue(order);

      const result = await service.update('1', updateOrderDto);

      expect(result).toEqual(order);
      expect(prismaService.order.update).toHaveBeenCalledWith({
        where: { id: '1' },
        data: updateOrderDto,
      });
    });
  });

  describe('remove', () => {
    it('should delete an order', async () => {
      jest.spyOn(prismaService.order, 'delete').mockResolvedValue(undefined);

      await service.remove('1');

      expect(prismaService.order.delete).toHaveBeenCalledWith({
        where: { id: '1' },
      });
    });
  });
});
