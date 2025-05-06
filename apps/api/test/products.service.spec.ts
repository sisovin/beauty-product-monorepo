import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from '../src/products/products.service';
import { PrismaService } from '../src/prisma/prisma.service';
import { CreateProductDto } from '../src/products/dto/create-product.dto';
import { UpdateProductDto } from '../src/products/dto/update-product.dto';
import { Product } from '@prisma/client';

describe('ProductsService', () => {
  let service: ProductsService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: PrismaService,
          useValue: {
            product: {
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

    service = module.get<ProductsService>(ProductsService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new product', async () => {
      const createProductDto: CreateProductDto = {
        id: '1',
        name: 'Product 1',
        description: 'Description 1',
        price: 100,
        discount: 10,
        imageUrl: 'http://example.com/image1.jpg',
        category: 'Category 1',
        stock: 10,
        rating: 4.5,
        reviews: [],
      };

      const product: Product = {
        id: '1',
        name: createProductDto.name,
        description: createProductDto.description,
        price: createProductDto.price,
        discount: createProductDto.discount,
        imageUrl: createProductDto.imageUrl,
        category: createProductDto.category,
        stock: createProductDto.stock,
        rating: createProductDto.rating,
        reviews: createProductDto.reviews,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(prismaService.product, 'create').mockResolvedValue(product);

      const result = await service.create(createProductDto);

      expect(result).toEqual(product);
      expect(prismaService.product.create).toHaveBeenCalledWith({
        data: createProductDto,
      });
    });
  });

  describe('findAll', () => {
    it('should return an array of products', async () => {
      const products: Product[] = [
        {
          id: '1',
          name: 'Product 1',
          description: 'Description 1',
          price: 100,
          discount: 10,
          imageUrl: 'http://example.com/image1.jpg',
          category: 'Category 1',
          stock: 10,
          rating: 4.5,
          reviews: [],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      jest.spyOn(prismaService.product, 'findMany').mockResolvedValue(products);

      const result = await service.findAll();

      expect(result).toEqual(products);
      expect(prismaService.product.findMany).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single product', async () => {
      const product: Product = {
        id: '1',
        name: 'Product 1',
        description: 'Description 1',
        price: 100,
        discount: 10,
        imageUrl: 'http://example.com/image1.jpg',
        category: 'Category 1',
        stock: 10,
        rating: 4.5,
        reviews: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(prismaService.product, 'findUnique').mockResolvedValue(product);

      const result = await service.findOne('1');

      expect(result).toEqual(product);
      expect(prismaService.product.findUnique).toHaveBeenCalledWith({
        where: { id: '1' },
      });
    });
  });

  describe('update', () => {
    it('should update a product', async () => {
      const updateProductDto: UpdateProductDto = {
        name: 'Updated Product 1',
        description: 'Updated Description 1',
        price: 150,
        discount: 15,
        imageUrl: 'http://example.com/updated-image1.jpg',
        category: 'Updated Category 1',
        stock: 20,
        rating: 4.8,
        reviews: [],
      };

      const product: Product = {
        id: '1',
        name: updateProductDto.name,
        description: updateProductDto.description,
        price: updateProductDto.price,
        discount: updateProductDto.discount,
        imageUrl: updateProductDto.imageUrl,
        category: updateProductDto.category,
        stock: updateProductDto.stock,
        rating: updateProductDto.rating,
        reviews: updateProductDto.reviews,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(prismaService.product, 'update').mockResolvedValue(product);

      const result = await service.update('1', updateProductDto);

      expect(result).toEqual(product);
      expect(prismaService.product.update).toHaveBeenCalledWith({
        where: { id: '1' },
        data: updateProductDto,
      });
    });
  });

  describe('remove', () => {
    it('should delete a product', async () => {
      jest.spyOn(prismaService.product, 'delete').mockResolvedValue(undefined);

      await service.remove('1');

      expect(prismaService.product.delete).toHaveBeenCalledWith({
        where: { id: '1' },
      });
    });
  });
});
