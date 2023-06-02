import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Course} from "../../course/entities/course.entity";

@Entity('practice')
export class Practice {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    name: string;
    @Column()
    content: string;
    @Column()
    deadline: string;
    @Column()
    response: string = null
    @ManyToOne(() => Course, (e) => e.practices)
    @JoinColumn({name: "course_practice"})
    course: Course

}
