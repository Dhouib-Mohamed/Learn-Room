import {Injectable} from '@nestjs/common';
import {GenericService} from 'src/generic/generic.service';
import {Practice} from './entities/practice.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Classroom} from "../classroom/entities/classroom.entity";
import {Course} from "../course/entities/course.entity";
import {Teacher} from "../teacher/entities/teacher.entity";
import {Student} from "../student/entities/student.entity";
import {CourseService} from "../course/course.service";
import {CreatePracticeDto} from "./dto/create-practice.dto";

@Injectable()
export class PracticeService extends GenericService<Practice> {
    private readonly courseService: CourseService

    constructor(
        @InjectRepository(Practice)
        private practiceRepository: Repository<Practice>,
        @InjectRepository(Course)
        private courseRepository: Repository<Course>,
        @InjectRepository(Classroom)
        private classRepository: Repository<Classroom>,
        @InjectRepository(Teacher)
        private teacherRepository: Repository<Teacher>,
        @InjectRepository(Student)
        private studentRepository: Repository<Student>,
    ) {
        super(practiceRepository);
        this.courseService = new CourseService(courseRepository, classRepository, teacherRepository, studentRepository)
    }

    createPractice = async (id, createPracticeDto: CreatePracticeDto) => {
        try {
            const course = await this.courseService.findOne(id);
            return await this.create({...createPracticeDto, course: course});
        } catch (e) {
            return e.sqlmessage ?? e;
        }
    }

}
