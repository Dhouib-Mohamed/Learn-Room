import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('course')
export class Course {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    name: string;
    @Column()
    content: string;
}
