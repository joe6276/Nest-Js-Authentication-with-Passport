import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserDTO } from './User.dto';
import { UserEntity } from './User.entity';
import {InjectRepository} from '@nestjs/typeorm'

@Injectable()
export class UsersService {
    constructor( @InjectRepository(UserEntity)  private userRepo: Repository<UserEntity>){}
    addUser(user:UserDTO){
        const userInstance = this.userRepo.create(user)
        return this.userRepo.save(userInstance)
    }


    getUser(email:string){
        return this.userRepo.findOne({where:{email}})
    }

    getUsers(){
        return this.userRepo.find({relations:['todo']})
    }
}
