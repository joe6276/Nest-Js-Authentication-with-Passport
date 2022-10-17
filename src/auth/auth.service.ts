import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import {JwtService} from '@nestjs/jwt'
import { UserDTO } from 'src/users/User.dto';
@Injectable()
export class AuthService {

    constructor(
         @Inject(forwardRef(() => UsersService))
        private userService:UsersService  ,private jwtService:JwtService){}

    async validateUser(email:string, password:string){
        const user =await this.userService.getUser(email)

        if(user && user.password===password){
            const {password, ...rest}=user
            return rest
        }
        return null
    }

    async login(user:UserDTO){
        const payload={...user}
        return{
            token:this.jwtService.sign(payload)
        }
    }
}
