import {forwardRef, Inject, Injectable} from '@nestjs/common';
import {CreateClassroomDto} from './dto/create-classroom.dto';
import {Classroom} from './entities/classroom.entity';
import {GenericService} from 'src/generic/generic.service';
import {InjectRepository} from '@nestjs/typeorm';
import {DeleteResult, Repository} from 'typeorm';
import {TeacherService} from "../teacher/Teacher.service";
import {Student} from "../student/entities/student.entity";
import {StudentService} from "../student/student.service";
import {Practice} from "../practice/entities/practice.entity";
import {Task} from "../task/entities/task.entity";
import {CourseService} from "../course/course.service";

@Injectable()
export class ClassroomService extends GenericService<Classroom> {


  constructor(
      @InjectRepository(Classroom)
      private classRepository: Repository<Classroom>,
      @InjectRepository(Student)
      private studentRepository: Repository<Student>,
      private readonly teacherService: TeacherService,
      private readonly studentService: StudentService,
      @Inject(forwardRef(() => CourseService))
      private readonly courseService: CourseService
  ) {
    super(classRepository);
    // this.teacherService = new TeacherService(teacherRepository)
    // this.studentService = new StudentService(studentRepository)
    // this.courseService = new CourseService(courseRepository,classRepository,teacherRepository,studentRepository,practiceRepository,taskRepository)
  }

  createClass = async (id, createClassroomDto: CreateClassroomDto) => {
    try {
      const teacher = await this.teacherService.findOne(id);
      return await this.create({...createClassroomDto, image_id: Math.floor(Math.random() * 2), teacher, students: []});
    } catch (e) {
      return e.sqlmessage ?? e;
    }
  }
  addUser = async (id, email) => {
    try {
      const student = await this.studentRepository.findOneBy({email});
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

  async updateClass(id: any, dto): Promise<DeleteResult> {
    try {
      const oldClass = await this.findOne(id)
      await super.update(id, dto);
      return {...(await this.teacherService.findOne(oldClass.teacher)), user: true}
    } catch (e) {
      console.log(e);
      return e.sqlmessage ?? e;
    }
  }

  async deleteClass(id: any): Promise<DeleteResult> {
    try {
      const oldClass = await this.findOne(id)
      await super.delete(id);
      return {...(await this.teacherService.findOne(oldClass.teacher)), user: true}
    } catch (e) {
      console.log(e);
      return e.sqlmessage ?? e;
    }
  }

  async getAllTasks(id: any): Promise<Task[]> {
    try {
      const classroom = await this.findOne(id)
      let tasks = []
      for (const e of classroom.classes) {
        tasks = {...tasks, ...(await this.courseService.getAllTasks(e.id))}
      }
      return tasks
    } catch (e) {
      console.log(e);
      return e.sqlmessage ?? e;
    }
  }

  async getAllAssignments(id: any): Promise<Practice[]> {
    try {
      const classroom = await this.findOne(id)
      let assignments = []
      for (const e of classroom.classes) {
        assignments = {...assignments, ...(await this.courseService.getAllAssignments(e.id))}
      }
      return assignments
    } catch (e) {
      console.log(e);
      return e.sqlmessage ?? e;
    }
  }


}
