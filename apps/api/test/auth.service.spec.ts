import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../src/auth/auth.service';
import { PrismaService } from '../src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../src/auth/dto/create-user.dto';
import { LoginUserDto } from '../src/auth/dto/login-user.dto';
import { User } from '../src/auth/entities/user.entity';
import * as argon2 from 'argon2';
import { UnauthorizedException } from '@nestjs/common';

describe('AuthService', () => {
  let service: AuthService;
  let prismaService: PrismaService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: PrismaService,
          useValue: {
            user: {
              create: jest.fn(),
              findUnique: jest.fn(),
            },
          },
        },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    prismaService = module.get<PrismaService>(PrismaService);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('register', () => {
    it('should create a new user', async () => {
      const createUserDto: CreateUserDto = {
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123',
      };

      const hashedPassword = await argon2.hash(createUserDto.password);
      const user: User = {
        id: '1',
        username: createUserDto.username,
        email: createUserDto.email,
        password: hashedPassword,
      };

      jest.spyOn(prismaService.user, 'create').mockResolvedValue(user);

      const result = await service.register(createUserDto);

      expect(result).toEqual(user);
      expect(prismaService.user.create).toHaveBeenCalledWith({
        data: {
          username: createUserDto.username,
          password: hashedPassword,
        },
      });
    });
  });

  describe('login', () => {
    it('should return an access token', async () => {
      const loginUserDto: LoginUserDto = {
        username: 'testuser',
        password: 'password123',
      };

      const user: User = {
        id: '1',
        username: loginUserDto.username,
        email: 'test@example.com',
        password: await argon2.hash(loginUserDto.password),
      };

      jest.spyOn(service, 'validateUser').mockResolvedValue(user);
      jest.spyOn(jwtService, 'sign').mockReturnValue('accessToken');

      const result = await service.login(loginUserDto);

      expect(result).toEqual({ accessToken: 'accessToken' });
      expect(service.validateUser).toHaveBeenCalledWith(loginUserDto.username, loginUserDto.password);
      expect(jwtService.sign).toHaveBeenCalledWith({ username: user.username, sub: user.id });
    });
  });

  describe('validateUser', () => {
    it('should return a user if credentials are valid', async () => {
      const username = 'testuser';
      const password = 'password123';

      const user: User = {
        id: '1',
        username,
        email: 'test@example.com',
        password: await argon2.hash(password),
      };

      jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(user);
      jest.spyOn(argon2, 'verify').mockResolvedValue(true);

      const result = await service['validateUser'](username, password);

      expect(result).toEqual(user);
      expect(prismaService.user.findUnique).toHaveBeenCalledWith({ where: { username } });
      expect(argon2.verify).toHaveBeenCalledWith(user.password, password);
    });

    it('should throw an UnauthorizedException if credentials are invalid', async () => {
      const username = 'testuser';
      const password = 'password123';

      jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(null);

      await expect(service['validateUser'](username, password)).rejects.toThrow(UnauthorizedException);
    });
  });
});
