import {Body, Controller, Post} from '@nestjs/common';
import {SignUpDto} from "../authentification/dto/sign-up.dto";
import {SignInDto} from "../authentification/dto/sign-in.dto";
import {AuthenticationService} from "../authentification/authentication.service";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Student} from "./entities/student.entity";

@Controller('student')
export class StudentController {
  private readonly studentService: AuthenticationService<Student>

  constructor(
      @InjectRepository(Student)
      private classRepository: Repository<Student>,
  ) {
    this.studentService = new AuthenticationService<Student>(this.classRepository)
  }


  @Post("signup")
  signup(@Body() SignUpDto: SignUpDto) {
    return this.studentService.signup(SignUpDto);
  }

  @Post("signin")
  signin(@Body() SignInDto: SignInDto) {
    return this.studentService.signIn(SignInDto);
  }

  // @Post()
  // create(@Body() createStudentDto: CreateStudentDto) {
  //   return this.studentService.create(createStudentDto);
  // }
  //
  // @Get()
  // findAll() {
  //   return this.studentService.findAll();
  // }
  //
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.studentService.findOne(+id);
  // }
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
  //   return this.studentService.update(+id, updateStudentDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.studentService.delete(+id);
  // }
}
