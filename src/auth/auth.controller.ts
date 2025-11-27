import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserRegisterDto } from 'src/dto/UserRegister.dto';
import { UserLoginDto } from 'src/dto/UserLogin.dto';
import { AuthGuard } from './auth.gaurds';
import { UserService } from 'src/user/user.service';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService : AuthService , private readonly userService : UserService){}

  @Post('register')

async  register(@Body() userRegisterDto :UserRegisterDto) { 

  return   await  this.authService.registerUser(userRegisterDto)
   
  }
@Post("login")
  async login(@Body() userLoginDto:UserLoginDto){
    return await this.authService.loginUser(userLoginDto)
  }
@UseGuards(AuthGuard)
  @Get("profile")
  async  getProfile(@Request() req){

    const userId = req.user.sub
    const  user  = await this.userService.getUserById(userId);
    console.log(user)
    return user 
  }

}
