import {Injectable} from '@nestjs/common';
import {CreateStudentDto} from './dto/create-student.dto';
import {UpdateStudentDto} from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import { GenericService } from 'src/generic/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService extends GenericService<Student>{
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {super(studentRepository)}

}
