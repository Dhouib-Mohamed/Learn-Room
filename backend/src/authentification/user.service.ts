import {Injectable, NotFoundException} from '@nestjs/common';
import {SignInDto} from "./dto/sign-in.dto";
import {TeacherService} from "../teacher/Teacher.service";
import {StudentService} from "../student/student.service";
import {Teacher} from "../teacher/entities/teacher.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Student} from "../student/entities/student.entity";

@Injectable()
export class UserService {
    constructor(
        private readonly teacherService: TeacherService,
        private readonly studentService: StudentService,
        @InjectRepository(Teacher)
        private teacherRepository: Repository<Teacher>,
        @InjectRepository(Student)
        private classRepository: Repository<Student>,
    ) {
    }

    async signIn(SignInDto: SignInDto) {
        try {
            const teacher: any = await this.teacherService.findOneByCriteria({email: SignInDto.email})
            if (teacher) {
                if (teacher.password !== SignInDto.password) {
                    throw new NotFoundException("Password Not Found")
                }
                teacher.password = teacher.password.length
                return {...teacher, user: true}
            }
            const student: any = await this.studentService.findOneByCriteria({email: SignInDto.email})
            if (student) {
                if (student.password !== SignInDto.password) {
                    throw new NotFoundException("Password Not Found")
                }
                student.password = student.password.length
                return {...student, user: false}
            }
            throw new NotFoundException("Email Not Found")
        } catch (e) {
            return (e)
        }
    }

    async signup(SignUpDto) {

        try {
            let user
            const noTeacher = await this.teacherRepository.findOneBy({email: SignUpDto.email})
            const noStudent = await this.teacherRepository.findOneBy({email: SignUpDto.email})
            if (noTeacher || noStudent) {
                throw new NotFoundException("Email Is already used")
            }
            if (SignUpDto.user) {
                user = await this.teacherService.create({
                    ...SignUpDto,
                    avatar_color: "#" + Math.floor(Math.random() * 16777215).toString(16),
                    classes: []
                });
            } else {

                user = await this.studentService.create({
                    ...SignUpDto,
                    avatar_color: "#" + Math.floor(Math.random() * 16777215).toString(16),
                    classes: []
                });
            }


            if (!user) {
                throw new NotFoundException();
            }

            user.password = user.password.length
            user.user = SignUpDto.user;
            return user;
        } catch (e) {
            return (e)
        }
    }
}

