import {Module} from '@nestjs/common';
import {ResponseTaskService} from './response_task.service';
import {ResponseTaskController} from './response_task.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ResponseTask} from "./entities/response_task.entity";
import {StudentModule} from "../student/student.module";
import {TaskModule} from "../task/task.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([ResponseTask]),
    TaskModule, StudentModule
  ],
  controllers: [ResponseTaskController],
  providers: [ResponseTaskService]
})
export class ResponseTaskModule {}
