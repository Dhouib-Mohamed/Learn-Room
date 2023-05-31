import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('practice')
export class Task {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    name: string;
    @Column()
    content: string;
    @Column()
    completed: boolean = false
}
