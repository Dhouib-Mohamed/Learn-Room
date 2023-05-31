import {Injectable} from '@nestjs/common';
import {CreateCourseDto} from './dto/create-course.dto';
import {UpdateCourseDto} from './dto/update-course.dto';
import {Course} from './entities/course.entity';
import {GenericService} from 'src/generic/generic.service';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

@Injectable()
export class CourseService extends GenericService<Course> {
    constructor(
        @InjectRepository(Course)
        private courseRepository: Repository<Course>,
    ) {
        super(courseRepository)
    }

}
