import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/schemas/user.schemas';

@Injectable()
export class ProfileService {
  constructor(@InjectModel(User.name)private userModel : Model<User>){}


  async userProfile(bio : string , isUrl:string): Promise<User|null>{
    return this.userModel.findOne({bio , isUrl}).exec()
  }
}
