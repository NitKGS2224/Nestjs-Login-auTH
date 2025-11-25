import { Injectable } from '@nestjs/common';
import { UserRegisterDto } from 'src/dto/UserRegister.dto';
import { UserService } from 'src/user/user.service';
import bcrypt from "bcrypt"
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(private readonly userService:UserService ,   private readonly jwtService: JwtService){}
  async registerUser(userRegisterDto : UserRegisterDto){
    console.log(userRegisterDto )
const hash = await bcrypt.hash(userRegisterDto.password , 10)
const user = await this.userService.createUser({...userRegisterDto ,  password:hash})
const payload = {sub:user._id}
const token = await this.jwtService.signAsync(payload)
return token
  }

}
