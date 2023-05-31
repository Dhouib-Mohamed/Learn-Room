import {Module} from '@nestjs/common';
import {ClassroomService} from './classroom.service';
import {ClassroomController} from './classroom.controller';
import {Classroom} from "./entities/classroom.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {TeacherModule} from "../teacher/teacher.module";
import {Teacher} from "../teacher/entities/teacher.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([Classroom]), TypeOrmModule.forFeature([Teacher]), TeacherModule,
    ],
    controllers: [ClassroomController],
    providers: [ClassroomService]
})
export class ClassroomModule {
}