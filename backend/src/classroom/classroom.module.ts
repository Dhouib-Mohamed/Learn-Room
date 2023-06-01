import {forwardRef, Module} from '@nestjs/common';
import {ClassroomService} from './classroom.service';
import {ClassroomController} from './classroom.controller';
import {Classroom} from "./entities/classroom.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {TeacherModule} from "../teacher/teacher.module";
import {Student} from "../student/entities/student.entity";
import {StudentModule} from "../student/student.module";
import {CourseModule} from "../course/course.module";
import {Course} from "../course/entities/course.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([Classroom]),
        TypeOrmModule.forFeature([Student]),
        TypeOrmModule.forFeature([Course]),
        TeacherModule, StudentModule, forwardRef(() => CourseModule),
    ],
    controllers: [ClassroomController],
    providers: [ClassroomService],
    exports: [ClassroomService],
})
export class ClassroomModule {
}