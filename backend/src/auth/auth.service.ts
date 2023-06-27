import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { SignUpDto } from './dto/signup.dto';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import utils from './../utils/app.utils';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(signupDto: SignUpDto): Promise<User> {
    const { name, email, password } = signupDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const user = await this.userModel.create({
        name,
        email,
        password: hashedPassword,
      });

      return user;
    } catch (error) {
      console.log(error);
      if (error.code === 11000) {
        throw new ConflictException('Duplicate Email entered.');
      }
    }
  }

  async login(loginDto: LoginDto): Promise<{ token: string }> {
    const { email, password } = loginDto;

    const user = await this.userModel.findOne({ email }).select('+password');

    if (!user) {
      throw new UnauthorizedException('Invalid email address or password.');
    }

    const isPassword = await bcrypt.compare(password, user.password);

    if (!isPassword) {
      throw new UnauthorizedException('Invalid email address or password.');
    }

    const token = await utils.assignJwtToken(user._id, this.jwtService);

    return { token };
  }
}
