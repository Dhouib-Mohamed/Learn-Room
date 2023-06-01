import {Module} from '@nestjs/common';
import {PracticeService} from './practice.service';
import {PracticeController} from './practice.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Practice} from "./entities/practice.entity";
import {CourseModule} from "../course/course.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([Practice]),
    CourseModule
  ],
  controllers: [PracticeController],
  providers: [PracticeService]
})
export class PracticeModule {}
