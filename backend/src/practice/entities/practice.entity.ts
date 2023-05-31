import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('practice')
export class Practice {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    name: string;
    @Column()
    content: string;
    @Column()
    deadline: Date;
    @Column()
    response: string = null
}
