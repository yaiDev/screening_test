import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { User } from './schemas/user.schema';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signUp')
  async SignUp(@Body() signUpDto: SignUpDto): Promise<User> {
    return await this.authService.signUp(signUpDto);
  }

  @Post('login')
  async Login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
    return await this.authService.login(loginDto);
  }
}
