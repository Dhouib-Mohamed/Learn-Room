import {Injectable} from '@nestjs/common';
import {CreateClassroomDto} from './dto/create-classroom.dto';
import {UpdateClassroomDto} from './dto/update-classroom.dto';
import { Classroom } from './entities/classroom.entity';
import { GenericService } from 'src/generic/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClassroomService extends GenericService<Classroom>{
  constructor(
    @InjectRepository(Classroom)
    private classRepository: Repository<Classroom>,
  ) { super(classRepository) }
  
}
