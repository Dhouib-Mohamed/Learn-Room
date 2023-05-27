import {Injectable} from '@nestjs/common';
import {CreateTeacherDto} from './dto/create-teacher.dto';
import {UpdateTeacherDto} from './dto/update-teacher.dto';
import { GenericService } from 'src/generic/generic.service';
import { Teacher } from './entities/teacher.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TeacherService extends GenericService<Teacher> {
  constructor(
    @InjectRepository(Teacher)
    private teacherRepository: Repository<Teacher>,
  ) {super(teacherRepository)}
 
}
