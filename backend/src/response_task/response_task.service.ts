import {Injectable} from '@nestjs/common';

import {GenericService} from "../generic/generic.service";
import {ResponseTask} from "./entities/response_task.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {StudentService} from "../student/student.service";
import {PracticeService} from "../practice/practice.service";

@Injectable()
export class ResponseTaskService extends GenericService<ResponseTask> {
    constructor(
        @InjectRepository(ResponseTask)
        private responseTaskRepository: Repository<ResponseTask>,
        private readonly PracticeService: PracticeService,
        private readonly StudentService: StudentService,
    ) {
        super(responseTaskRepository);
    }

    getResponseTask = async (idTask, idStudent) => {
        try {
            const task = await this.PracticeService.findOne(idTask);
            const student = await this.StudentService.findOne(idStudent)
            return await this.responseTaskRepository.findOneBy({student, task})

        } catch (e) {
            return e.sqlmessage ?? e;
        }
    }


}
