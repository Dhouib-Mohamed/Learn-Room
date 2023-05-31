import {Injectable, NotFoundException} from '@nestjs/common';
import {SignInDto} from "./dto/sign-in.dto";
import {SignUpDto} from "./dto/sign-up.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Teacher} from "../teacher/entities/teacher.entity";
import {Student} from "../student/entities/student.entity";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Teacher)
        private readonly teacherRepository: Repository<Teacher>,
        @InjectRepository(Student)
        private readonly studentRepository: Repository<Student>) {
    }

    async signIn(SignInDto: SignInDto) {
        try {
            const teacher: any = await this.teacherRepository.findOneBy({email: SignInDto.email})
            const student: any = await this.studentRepository.findOneBy({email: SignInDto.email})
            if (teacher) {
                if (teacher.password !== SignInDto.password) {
                    throw new NotFoundException("Password Not Found")
                }
                teacher.password = teacher.password.length
                console.log(teacher.classes)
                return teacher
            }
            if (student) {
                if (student.password !== SignInDto.password) {
                    throw new NotFoundException("Password Not Found")
                }
                student.password = student.password.length
                return student
            }
            throw new NotFoundException("Email Not Found")
        } catch (e) {
            return e.sqlMessage ?? e
        }
    }

    async signup(SignUpDto: SignUpDto) {
        try {
            const repository = SignUpDto.user ? this.teacherRepository : this.studentRepository
            const user: any = await repository.save({
                ...SignUpDto,
                avatar_color: "#" + Math.floor(Math.random() * 16777215).toString(16),
                classes: []
            })
            if (!user) {
                throw new NotFoundException()
            }
            user.password = user.password.length
            return user
        } catch (e) {
            return e.sqlMessage ?? e
        }
    }
}
