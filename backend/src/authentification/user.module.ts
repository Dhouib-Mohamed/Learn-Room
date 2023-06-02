import {Module} from '@nestjs/common';
import {UserController} from "./user.controller";
import {UserService} from "./user.service";
import {TeacherModule} from "../teacher/teacher.module";
import {StudentModule} from "../student/student.module";

@Module({
  imports: [TeacherModule, StudentModule],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {
}
