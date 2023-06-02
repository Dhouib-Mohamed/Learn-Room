import {Injectable, NotFoundException} from '@nestjs/common';
import {SignInDto} from "./dto/sign-in.dto";
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
            if (teacher) {
                if (teacher.password !== SignInDto.password) {
                    throw new NotFoundException("Password Not Found")
                }
                teacher.password = teacher.password.length
                return {...teacher, user: true}
            }
            const student: any = await this.studentRepository.findOneBy({email: SignInDto.email})
            if (student) {
                if (student.password !== SignInDto.password) {
                    throw new NotFoundException("Password Not Found")
                }
                student.password = student.password.length
                return {...student, user: false}
            }
            throw new NotFoundException("Email Not Found")
        } catch (e) {
            console.log(e)
            return e.sqlMessage ?? e
        }
    }

    async signup(SignUpDto) {

        try {
            let user

            console.log(SignUpDto)
            if(SignUpDto.user){

                 user  = await this.teacherRepository.save({
                    ...SignUpDto,
                    avatar_color: "#" + Math.floor(Math.random() * 16777215).toString(16),
                    classes: []
                });
            }
            else {

              user  = await this.studentRepository.save({
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
            // Handle and log the error appropriately
            console.error(e);
            throw new Error('An error occurred during signup.');
        }
    }
}

