import {Injectable} from '@nestjs/common';
import {CreateClassroomDto} from './dto/create-classroom.dto';
import {Classroom} from './entities/classroom.entity';
import {GenericService} from 'src/generic/generic.service';
import {InjectRepository} from '@nestjs/typeorm';
import {DeleteResult, Repository} from 'typeorm';
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
      private studentRepository: Repository<Student>,
  ) {
    super(classRepository);
    this.teacherService = new TeacherService(teacherRepository)
    this.studentService = new StudentService(studentRepository)
  }

  createClass = async (id, createClassroomDto: CreateClassroomDto) => {
    try {
      const teacher = await this.teacherService.findOne(id);
      return await this.create({...createClassroomDto, image_id: Math.floor(Math.random() * 2), teacher, students: []});
    } catch (e) {
      return e.sqlmessage ?? e;
    }
  }


  addUser = async (id, user) => {
    try {
      const student = await this.studentService.findOne(user);
      const currentClass = await this.findOne(id);
      student.classes = student.classes ?? [];
      student.classes.push(currentClass);
      await this.studentService.create(student);
      currentClass.students = currentClass.students ?? [];
      currentClass.students.push(student);
      await this.create(currentClass);
      return currentClass;
    } catch (e) {
      console.log(e);
      return e.sqlmessage ?? e;
    }
  };

  async deleteClass(id: any): Promise<DeleteResult> {
    const oldClass = await this.findOne(id)
    await super.delete(id);
    return {...(await this.teacherService.findOne(oldClass.teacher)), user: true}
  }


}
