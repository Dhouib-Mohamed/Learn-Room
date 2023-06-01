import {Module} from '@nestjs/common';
import {TaskService} from './task.service';
import {TaskController} from './task.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Task} from "./entities/task.entity";
import {CourseModule} from "../course/course.module";

@Module({
    controllers: [TaskController],
    providers: [TaskService],
    imports: [
        TypeOrmModule.forFeature([Task]),
        CourseModule
    ],
})
export class TaskModule {
}
