import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ClassroomModule} from './classroom/classroom.module';
import {PracticeModule} from './practice/practice.module';
import {SupportModule} from './support/support.module';
import {StudentModule} from './student/student.module';
import {TeacherModule} from './teacher/teacher.module';
import {TypeOrmModule} from "@nestjs/typeorm";
//import { GenericModule } from './generic/generic.module';
import * as dotenv from "dotenv";


dotenv.config();
@Module({
  imports: [ClassroomModule, TeacherModule, StudentModule, SupportModule, PracticeModule,
    TypeOrmModule.forRoot({
      type:  "mysql",
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities:true,
      logging:true ,
      synchronize: true,


    }),
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
