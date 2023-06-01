import {Injectable} from '@nestjs/common';
import {GenericService} from 'src/generic/generic.service';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Task} from "./entities/task.entity";
import {CourseService} from "../course/course.service";
import {Course} from "../course/entities/course.entity";
import {Classroom} from "../classroom/entities/classroom.entity";
import {Teacher} from "../teacher/entities/teacher.entity";
import {Student} from "../student/entities/student.entity";
import {CreateTaskDto} from "./dto/create-task.dto";

@Injectable()
export class TaskService extends GenericService<Task> {
    private readonly courseService: CourseService

    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>,
        @InjectRepository(Course)
        private courseRepository: Repository<Course>,
        @InjectRepository(Classroom)
        private classRepository: Repository<Classroom>,
        @InjectRepository(Teacher)
        private teacherRepository: Repository<Teacher>,
        @InjectRepository(Student)
        private studentRepository: Repository<Student>,
    ) {
        super(taskRepository);
        this.courseService = new CourseService(courseRepository, classRepository, teacherRepository, studentRepository)
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
