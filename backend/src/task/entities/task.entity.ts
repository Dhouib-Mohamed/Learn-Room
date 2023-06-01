import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Course} from "../../course/entities/course.entity";

@Entity('task')
export class Task {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    name: string;
    @Column()
    content: string;
    @Column()
    completed: boolean = false
    @ManyToOne(() => Course, (e) => e.tasks)
    @JoinColumn({name: "course_task"})
    course: Course
}
