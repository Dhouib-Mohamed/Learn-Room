import {Injectable} from '@nestjs/common';
import {CreateClassroomDto} from './dto/create-classroom.dto';
import {Classroom} from './entities/classroom.entity';
import {GenericService} from 'src/generic/generic.service';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {TeacherService} from "../teacher/Teacher.service";
import {Teacher} from "../teacher/entities/teacher.entity";
import {Student} from "../student/entities/student.entity";
import {StudentService} from "../student/student.service";

@Injectable()
export class ClassroomService extends GenericService<Classroom> {
  private readonly teacherService: TeacherService
  private readonly studentService: StudentService

  constructor(
      @InjectRepository(Classroom)
      private classRepository: Repository<Classroom>,
      @InjectRepository(Teacher)
      private teacherRepository: Repository<Teacher>,
      @InjectRepository(Student)
      private studentRepository: Repository<Teacher>,
  ) {
    super(classRepository);
    this.teacherService = new TeacherService(teacherRepository)
    this.studentService = new StudentService(studentRepository)
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

  addUser = async (id, user) => {
    try {
      console.log(id)
      console.log(user)
      const student = await this.studentService.findOne(user);
      const currentClass = await this.findOne(id)
      console.log(student)
      console.log(currentClass)
      const res = await this.studentService.update(user, {classes: [...user.classes, currentClass]})
      console.log(res)
      return await this.update(id, [...currentClass.students, student])
    } catch (e) {
      return e.sqlmessage ?? e
    }
  }

}
