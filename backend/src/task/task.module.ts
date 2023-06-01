import {Module} from '@nestjs/common';
import {TaskService} from './task.service';
import {TaskController} from './task.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Task} from "./entities/task.entity";
import {Course} from "../course/entities/course.entity";
import {Classroom} from "../classroom/entities/classroom.entity";
import {Student} from "../student/entities/student.entity";
import {Teacher} from "../teacher/entities/teacher.entity";
import {CourseModule} from "../course/course.module";

@Module({
    controllers: [TaskController],
    providers: [TaskService],
    imports: [
        TypeOrmModule.forFeature([Task]),
        TypeOrmModule.forFeature([Course]),
        TypeOrmModule.forFeature([Classroom]),
        TypeOrmModule.forFeature([Student]),
        TypeOrmModule.forFeature([Teacher]),
        CourseModule
    ],
})
export class TaskModule {
}
