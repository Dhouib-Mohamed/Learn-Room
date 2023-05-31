import {Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {IsEmail} from "class-validator";
import {Exclude} from "class-transformer";
import {Classroom} from "../../classroom/entities/classroom.entity";

@Entity('student')
export class Student {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({unique: true})
    @IsEmail()
    email: string;
    @Column()
    @Exclude()
    password: string;
    @Column()
    name: string;
    @Column()
    avatar_color: string;
    @ManyToMany(() => Classroom, (e) => e.students, {eager: true})
    classes: Classroom[]

}
