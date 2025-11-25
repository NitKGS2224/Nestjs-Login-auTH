import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserRegisterDto } from 'src/dto/UserRegister.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService : AuthService){}
  @Post('register')

async  register(@Body() userRegisterDto :UserRegisterDto) { 

  return   await  this.authService.registerUser(userRegisterDto)
   
  }
}
