import {Module} from '@nestjs/common';
import {ResponseTaskService} from './response_task.service';
import {ResponseTaskController} from './response_task.controller';

@Module({
  controllers: [ResponseTaskController],
  providers: [ResponseTaskService]
})
export class ResponseTaskModule {}
