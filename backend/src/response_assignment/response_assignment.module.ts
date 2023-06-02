import {Module} from '@nestjs/common';
import {ResponseAssignmentService} from './response_assignment.service';
import {ResponseAssignmentController} from './response_assignment.controller';

@Module({
  controllers: [ResponseAssignmentController],
  providers: [ResponseAssignmentService]
})
export class ResponseAssignmentModule {}
