import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './todo.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TodoEntity])],
  providers: [TodosService],
  controllers: [TodosController]
})
export class TodosModule {}
