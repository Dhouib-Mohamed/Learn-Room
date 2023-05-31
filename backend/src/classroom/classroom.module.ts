import {Module} from '@nestjs/common';
import {ClassroomService} from './classroom.service';
import {ClassroomController} from './classroom.controller';
import {Classroom} from "./entities/classroom.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {TeacherModule} from "../teacher/teacher.module";
import {Teacher} from "../teacher/entities/teacher.entity";
import {Student} from "../student/entities/student.entity";
import {StudentModule} from "../student/student.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([Classroom]),
        TypeOrmModule.forFeature([Teacher]),
        TypeOrmModule.forFeature([Student]),
        TeacherModule, StudentModule
    ],
    controllers: [ClassroomController],
    providers: [ClassroomService]
})
export class ClassroomModule {
}