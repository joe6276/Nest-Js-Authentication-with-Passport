import {Entity, PrimaryGeneratedColumn, Unique ,Column} from 'typeorm'

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

}