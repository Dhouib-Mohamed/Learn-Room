import {Injectable} from '@nestjs/common';
import {GenericService} from 'src/generic/generic.service';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Task} from "./entities/task.entity";

@Injectable()
export class TaskService extends GenericService<Task> {
    constructor(
        @InjectRepository(Task)
        private practiceRepository: Repository<Task>,
    ) {
        super(practiceRepository)
    }

}
