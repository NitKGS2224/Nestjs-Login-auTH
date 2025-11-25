import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRegisterDto } from 'src/dto/UserRegister.dto';
import { UserService } from 'src/user/user.service';
import bcrypt from "bcrypt"
import { JwtService } from '@nestjs/jwt';
import { UserLoginDto } from 'src/dto/UserLogin.dto';
import { ProfileDto } from 'src/dto/Profile.dto';
import { ProfileService } from 'src/profile/profile.service';
@Injectable()
export class AuthService {
  constructor(private readonly userService:UserService ,   private readonly jwtService: JwtService, private readonly Profile : ProfileService){}
  async registerUser(userRegisterDto : UserRegisterDto){
    console.log(userRegisterDto )
const hash = await bcrypt.hash(userRegisterDto.password , 10)

const user = await this.userService.createUser({...userRegisterDto ,  password:hash})
const payload = {sub:user._id}
const token = await this.jwtService.signAsync(payload)
return  {accessToken : token}
  }


  //login auth 
async loginUser(userLoginDto : UserLoginDto){
  const {email , password} = userLoginDto

  const user = await this.userService.loginUser(email)

  if(!user){
    throw new UnauthorizedException("invalid email")
  }
const isMatch =  await bcrypt.compare(password , user.password)

if(!isMatch){
  throw new UnauthorizedException("invalid  email or password ")
}

  const payload = { email:user.email , role:user.role}
  const token = await this.jwtService.signAsync(payload)
  return {accessToken : token}
  

}
async profileUser(userProfileDto : ProfileDto){
  const { bio , isUrl} = userProfileDto

  const user = await  this.Profile.userProfile(bio , isUrl)
  if(!user){
    throw new UnauthorizedException("Invalid author")
  }
  const payload = {bio : user.bio , role : user.role}

  const token = await this.jwtService.signAsync(payload)
  return{accessToken : token}
}
}



