import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {IsEmail, IsInt} from "class-validator";
import {Exclude} from "class-transformer";

@Entity('teacher')
export class Teacher {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    @IsEmail()
    email: string;
    @Column()
    @Exclude()
    password: string;
    @Column()
    @IsInt()
    name: string;
}
