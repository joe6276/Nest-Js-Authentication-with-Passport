import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserEntity } from './users/User.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TodosModule } from './todos/todos.module';
import { TodoEntity } from './todos/todo.entity';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot({
    type:'sqlite',
    database:'users.sqlite',
    entities:[UserEntity,TodoEntity],
    synchronize:true
  }), AuthModule, TodosModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
