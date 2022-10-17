import { Body, Controller, forwardRef, Get, Inject, Param, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/Guards/jwt.auth';
import { LocalAuthGuard } from 'src/Guards/local.auth';
import { UserDTO } from './User.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userService:UsersService,   @Inject(forwardRef(() => AuthService))private authService:AuthService){}
  
    @Post()
    addUser(@Body() body:UserDTO){
    return this.userService.addUser(body)
    }

    @Get()
    getUsers(){
       return  this.userService.getUsers()
    }

    @Post('login')
    @UseGuards(LocalAuthGuard)
    loginUser(@Request() req){
            return this.authService.login(req.user)
    }

    @Get('protected')
    @UseGuards(JwtAuthGuard)
    getProtected(@Request() req){
        return req.user
    }

    @Get('/:username')
    getUser(@Param('username') username:string){
        return this.userService.getUser(username)
    }

}
