import { TodoEntity } from 'src/todos/todo.entity'
import {Entity, PrimaryGeneratedColumn, Unique ,Column, OneToMany} from 'typeorm'

@Entity()
@Unique(['username', 'email'])
export class UserEntity {
    @PrimaryGeneratedColumn()
    id:string

    @Column()
    name:string
    
    @Column()
    username:string
    
    @Column()
    email:string

    @Column()
    password:string

    @OneToMany(()=>TodoEntity, (todo)=>todo.user, {onDelete:'CASCADE'})
    todo:TodoEntity[]
    

}