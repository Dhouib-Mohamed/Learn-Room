import {Injectable} from '@nestjs/common';
import {GenericService} from 'src/generic/generic.service';
import {Practice} from './entities/practice.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {CourseService} from "../course/course.service";
import {CreatePracticeDto} from "./dto/create-practice.dto";
import {Course} from "../course/entities/course.entity";
import {Teacher} from "../teacher/entities/teacher.entity";
import {Classroom} from "../classroom/entities/classroom.entity";

@Injectable()
export class PracticeService extends GenericService<Practice> {


    constructor(
        @InjectRepository(Practice)
        private practiceRepository: Repository<Practice>,
        @InjectRepository(Course)
        private courseRepository: Repository<Course>,
        @InjectRepository(Teacher)
        private teacherRepository: Repository<Teacher>,
        @InjectRepository(Classroom)
        private classRepository: Repository<Classroom>,
        private readonly courseService: CourseService
    ) {
        super(practiceRepository);
    }

    createPractice = async (id, createPracticeDto: CreatePracticeDto) => {
        try {
            const course = await this.courseService.findOne(id);
            return await this.create({...createPracticeDto, course: course});
        } catch (e) {
            return e.sqlmessage ?? e;
        }
    }
    getPractice = async (id) => {
        try {
            const practice = await this.findOne(id);
            const course = await this.courseRepository.findOneBy({practices: practice})
            const currentClass = await this.classRepository.findOneBy({courses: course})
            return {...practice, teacher: (await this.teacherRepository.findOneBy({classes: currentClass}))}
        } catch (e) {
            return e.sqlmessage ?? e;
        }
    }
}
