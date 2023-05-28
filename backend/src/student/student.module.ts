import {Module} from '@nestjs/common';
import {StudentController} from './student.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Student} from "./entities/student.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Student])
  ],
  controllers: [StudentController],
})
export class StudentModule {}
