import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { ProfileModule } from 'src/profile/profile.module';

@Module({
  controllers: [AuthController ],
  imports:[UserModule,ConfigModule.forRoot()
      , JwtModule.register({
      global: true,
      secret: "JWT_SECRET_KEY",
      signOptions: { expiresIn: '60s' },
    }), ProfileModule
  ],
  providers: [AuthService]
})
export class AuthModule {}
