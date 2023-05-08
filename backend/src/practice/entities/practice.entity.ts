import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('practice')
export class Practice {
    @PrimaryGeneratedColumn("uuid")
    id: string;
}
