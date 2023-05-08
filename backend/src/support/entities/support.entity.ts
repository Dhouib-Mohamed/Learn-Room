import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('support')
export class Support {
    @PrimaryGeneratedColumn("uuid")
    id: string;
}
