import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './entities/user.entity';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async register(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.username = createUserDto.username;
    user.password = await argon2.hash(createUserDto.password);
    // Add logic to save the user to the database
    return user;
  }

  async login(loginUserDto: LoginUserDto): Promise<{ accessToken: string }> {
    const user = await this.validateUser(loginUserDto.username, loginUserDto.password);
    const payload = { username: user.username, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  private async validateUser(username: string, password: string): Promise<User> {
    // Add logic to find the user by username
    const user = new User(); // Replace with actual user fetching logic
    const passwordMatches = await argon2.verify(user.password, password);
    if (!passwordMatches) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }
}
