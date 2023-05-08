import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('classroom')
export class Classroom {
    @PrimaryGeneratedColumn("uuid")
    id: string;
}
