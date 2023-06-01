import {Module} from '@nestjs/common';
import {PracticeService} from './practice.service';
import {PracticeController} from './practice.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Practice} from "./entities/practice.entity";
import {Course} from "../course/entities/course.entity";
import {Classroom} from "../classroom/entities/classroom.entity";
import {Student} from "../student/entities/student.entity";
import {Teacher} from "../teacher/entities/teacher.entity";
import {CourseModule} from "../course/course.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([Practice]),
    TypeOrmModule.forFeature([Course]),
    TypeOrmModule.forFeature([Classroom]),
    TypeOrmModule.forFeature([Student]),
    TypeOrmModule.forFeature([Teacher]),
    CourseModule
  ],
  controllers: [PracticeController],
  providers: [PracticeService]
})
export class PracticeModule {}
