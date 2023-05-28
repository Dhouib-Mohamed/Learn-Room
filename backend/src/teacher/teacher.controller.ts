import {Body, Controller, Post} from '@nestjs/common';
import {SignUpDto} from "../authentification/dto/sign-up.dto";
import {SignInDto} from "../authentification/dto/sign-in.dto";
import {AuthenticationService} from "../authentification/authentication.service";
import {Teacher} from "./entities/teacher.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Controller('teacher')
export class TeacherController {

  private readonly teacherService: AuthenticationService<Teacher>

  constructor(
      @InjectRepository(Teacher)
      private classRepository: Repository<Teacher>,
  ) {
    this.teacherService = new AuthenticationService<Teacher>(this.classRepository)
  }

  @Post("signup")
  signup(@Body() SignUpDto: SignUpDto) {
    return this.teacherService.signup(SignUpDto);
  }

  @Post("signin")
  signin(@Body() SignInDto: SignInDto) {
    return this.teacherService.signIn(SignInDto);
  }

  // @Get()
  // findAll() {
  //   return this.teacherService.findAll();
  // }
  //
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.teacherService.findOne(+id);
  // }
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTeacherDto: UpdateTeacherDto) {
  //   return this.teacherService.update(+id, updateTeacherDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.teacherService.delete(+id);
  // }
}
