import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserRegisterDto } from 'src/dto/UserRegister.dto';
import { User } from './schemas/user.schemas';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async createUser(userRegisterDto:UserRegisterDto){
    try{
return await this.userModel.create({
  fname:userRegisterDto.fname,
  lname:userRegisterDto.lname,
  email:userRegisterDto.email,
  password:userRegisterDto.password,
})
    }catch(err){
console.log(err)
   const e = err as{code?:number}
   const  DUPLICATE_KEY_CODE = 11000
    if( e.code = DUPLICATE_KEY_CODE){
throw new ConflictException("Email is already exist.")
    }
    throw err
    }
  }
}
