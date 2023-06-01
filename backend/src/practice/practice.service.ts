import {Injectable} from '@nestjs/common';
import {GenericService} from 'src/generic/generic.service';
import {Practice} from './entities/practice.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {CourseService} from "../course/course.service";
import {CreatePracticeDto} from "./dto/create-practice.dto";

@Injectable()
export class PracticeService extends GenericService<Practice> {


    constructor(
        @InjectRepository(Practice)
        private practiceRepository: Repository<Practice>,
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

}
