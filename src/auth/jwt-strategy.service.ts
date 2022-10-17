import { Injectable } from '@nestjs/common';
import {PassportStrategy} from '@nestjs/passport'
import {Strategy, ExtractJwt} from 'passport-jwt'
import { AuthService } from './auth.service';
@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy) {

    constructor(private authService:AuthService){
        super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secret',
        })

      
    }
      async validate(payload:any){
            return payload
        }
}
