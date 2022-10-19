
import {IsString,IsNotEmpty} from 'class-validator'

export class TOdoDTO{
    @IsString()
    @IsNotEmpty()
    title:string

    @IsNotEmpty()
    @IsString()
    description:string
}