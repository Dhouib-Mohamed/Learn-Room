import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('student')
export class Student {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    name: string;
}
