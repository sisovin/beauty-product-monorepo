import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.prismaService.user.create({
      data: createUserDto,
    });
    return user;
  }

  async findAll(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  async findOne(id: string): Promise<User> {
    return this.prismaService.user.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.prismaService.user.update({
      where: { id },
      data: updateUserDto,
    });
    return user;
  }

  async remove(id: string): Promise<void> {
    await this.prismaService.user.delete({
      where: { id },
    });
  }
}
