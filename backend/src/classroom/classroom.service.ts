import {Injectable} from '@nestjs/common';
import {CreateClassroomDto} from './dto/create-classroom.dto';
import {Classroom} from './entities/classroom.entity';
import {GenericService} from 'src/generic/generic.service';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {TeacherService} from "../teacher/Teacher.service";
import {Teacher} from "../teacher/entities/teacher.entity";

@Injectable()
export class ClassroomService extends GenericService<Classroom> {
  private readonly teacherService: TeacherService

  constructor(
      @InjectRepository(Classroom)
      private classRepository: Repository<Classroom>,
      @InjectRepository(Teacher)
      private teacherRepository: Repository<Teacher>,
  ) {
    super(classRepository);
    this.teacherService = new TeacherService(teacherRepository)
  }

  createClass = async (id, createClassroomDto: CreateClassroomDto) => {
    try {
      const teacher = await this.teacherService.findOne(id);
      const classes = await this.create({...createClassroomDto, image_id: Math.floor(Math.random() * (2)), teacher});
      const currentClasses = teacher.classes ?? []
      await this.teacherService.update(id, {classes: [...currentClasses, classes]})
      return classes
    } catch (e) {
      return e.sqlmessage ?? e
    }
  }

}
