import {Module} from '@nestjs/common';
import {UserController} from "./user.controller";
import {UserService} from "./user.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Teacher} from "../teacher/entities/teacher.entity";
import {Student} from "../student/entities/student.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Teacher]),
    TypeOrmModule.forFeature([Student])
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {
}
