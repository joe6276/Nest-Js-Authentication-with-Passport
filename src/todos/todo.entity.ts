


import { UserEntity } from 'src/users/User.entity'
import {Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn, ManyToOne} from 'typeorm'

@Entity()
export class TodoEntity{
    @PrimaryGeneratedColumn()
    id:string

    @Column()
    title:string

    @Column()
    description:string

    @DeleteDateColumn()
    deletedAt:Date

    @ManyToOne(()=>UserEntity , (user)=>user.todo)
    user:UserEntity
}