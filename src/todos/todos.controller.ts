import { Body, Controller, Get,Request, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/Guards/jwt.auth';
import { TOdoDTO } from './todo.dto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
     constructor(private todoService:TodosService){}
    @UseGuards(JwtAuthGuard)
    @Post()
    createTodo(@Body() body:TOdoDTO ,@Request() req:any){
        return this.todoService.createTodo(body, req.user)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getTodos(){
        return this.todoService.getTodos()
    }
    
    @UseGuards(JwtAuthGuard)
    @Get('/:id')
    getTodo(@Param('id') id:string){
        return this.todoService.getTodo(id)
    }
    
}
