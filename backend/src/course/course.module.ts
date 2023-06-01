import {Module} from '@nestjs/common';
import {CourseService} from './course.service';
import {CourseController} from './course.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Course} from "./entities/course.entity";
import {Classroom} from "../classroom/entities/classroom.entity";
import {Student} from "../student/entities/student.entity";
import {Teacher} from "../teacher/entities/teacher.entity";
import {ClassroomModule} from "../classroom/classroom.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([Course]),
        TypeOrmModule.forFeature([Classroom]),
        TypeOrmModule.forFeature([Student]),
        TypeOrmModule.forFeature([Teacher]),
        ClassroomModule
    ],
    controllers: [CourseController],
    providers: [CourseService]
})
export class CourseModule {
}
