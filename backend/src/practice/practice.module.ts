import {Module} from '@nestjs/common';
import {PracticeService} from './practice.service';
import {PracticeController} from './practice.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Practice} from "./entities/practice.entity";
import {CourseModule} from "../course/course.module";
import {Course} from "../course/entities/course.entity";
import {Classroom} from "../classroom/entities/classroom.entity";
import {Teacher} from "../teacher/entities/teacher.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Practice]),
    TypeOrmModule.forFeature([Course]),
    TypeOrmModule.forFeature([Classroom]),
    TypeOrmModule.forFeature([Teacher]),
    CourseModule
  ],
  controllers: [PracticeController],
  providers: [PracticeService]
})
export class PracticeModule {}
