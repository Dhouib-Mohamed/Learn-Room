import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('teacher')
export class Teacher {
    @PrimaryGeneratedColumn("uuid")
    id: string;
}
