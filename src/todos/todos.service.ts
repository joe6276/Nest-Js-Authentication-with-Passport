import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TOdoDTO } from './todo.dto';
import { TodoEntity } from './todo.entity';

@Injectable()
export class TodosService {
    
constructor(@InjectRepository(TodoEntity) 
private todoRepo:Repository<TodoEntity>){}

async createTodo(todo:TOdoDTO, user:any){
const todoInstance = await this.todoRepo.create(todo)
todoInstance.user=user.id
return await this.todoRepo.save(todoInstance)
}

 async getTodos(){
    return await this.todoRepo.find({relations:['user']})
}

 async getTodo(id:string){
    return  await this.todoRepo.findOne({where:{id}, relations:['user']},)
}

}
