import {Injectable} from '@nestjs/common';
import {CreateCourseDto} from './dto/create-course.dto';
import {Course} from './entities/course.entity';
import {GenericService} from 'src/generic/generic.service';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Classroom} from "../classroom/entities/classroom.entity";
import {Teacher} from "../teacher/entities/teacher.entity";
import {Student} from "../student/entities/student.entity";
import {ClassroomService} from "../classroom/classroom.service";

@Injectable()
export class CourseService extends GenericService<Course> {
    private readonly classService: ClassroomService

    constructor(
        @InjectRepository(Classroom)
        private courseRepository: Repository<Course>,
        @InjectRepository(Teacher)
        private classRepository: Repository<Classroom>,
        @InjectRepository(Teacher)
        private teacherRepository: Repository<Teacher>,
        @InjectRepository(Student)
        private studentRepository: Repository<Student>,
    ) {
        super(courseRepository);
        this.classService = new ClassroomService(classRepository, teacherRepository, studentRepository)
    }

    createCourse = async (id, createCourseDto: CreateCourseDto) => {
        try {
            const classroom = await this.classService.findOne(id);
            return await this.create({...createCourseDto, class: classroom, tasks: [], assignments: []});
        } catch (e) {
            return e.sqlmessage ?? e;
        }
    }
}
