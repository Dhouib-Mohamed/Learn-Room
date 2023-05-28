import {Module} from '@nestjs/common';
import {TeacherController} from './teacher.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Teacher} from "./entities/teacher.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Teacher])
  ],
  controllers: [TeacherController],
})
export class TeacherModule {}
