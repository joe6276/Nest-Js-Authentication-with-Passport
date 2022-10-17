import { forwardRef, Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { LocalStrategyService } from './local-strategy.service';
import {PassportModule} from "@nestjs/passport"
import {JwtModule} from '@nestjs/jwt'
import { JwtStrategyService } from './jwt-strategy.service';
@Module({
  imports:[forwardRef(() => UsersModule), PassportModule,
  JwtModule.register({
    secret:'secret',
    signOptions:{expiresIn:'3600s'}
  })],
  providers: [AuthService, LocalStrategyService, JwtStrategyService],
  exports:[AuthService]
})
export class AuthModule {}
