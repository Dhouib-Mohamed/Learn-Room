import {Injectable} from '@nestjs/common';
import {GenericService} from 'src/generic/generic.service';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Task} from "./entities/task.entity";
import {CourseService} from "../course/course.service";
import {CreateTaskDto} from "./dto/create-task.dto";

@Injectable()
export class TaskService extends GenericService<Task> {

    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>,
        private readonly courseService: CourseService
    ) {
        super(taskRepository);
        // this.courseService = new CourseService(courseRepository, classRepository, teacherRepository, studentRepository,practiceRepository,taskRepository)
    }

    createTask = async (id, createTaskDto: CreateTaskDto) => {
        try {
            const course = await this.courseService.findOne(id);
            return await this.create({...createTaskDto, course: course});
        } catch (e) {
            return e.sqlmessage ?? e;
        }
    }

}
