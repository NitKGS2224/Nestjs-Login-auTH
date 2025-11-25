import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserRegisterDto } from 'src/dto/UserRegister.dto';
import { UserLoginDto } from 'src/dto/UserLogin.dto';
import { ProfileDto } from 'src/dto/Profile.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService : AuthService){}
  @Post('register')

async  register(@Body() userRegisterDto :UserRegisterDto) { 

  return   await  this.authService.registerUser(userRegisterDto)
   
  }
@Post("login")
  async login(@Body() userLoginDto:UserLoginDto){
    return await this.authService.loginUser(userLoginDto)
  }

@Post("profile")
async profile(@Body()  userProfileDto:ProfileDto){
return await this.authService.profileUser(userProfileDto)
}

}
