import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { User, UserSchema } from 'src/user/schemas/user.schemas';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
   imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [ProfileService],
  exports:[ProfileService]
})
export class ProfileModule {}
