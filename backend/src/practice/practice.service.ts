import {Injectable} from '@nestjs/common';
import {CreatePracticeDto} from './dto/create-practice.dto';
import {UpdatePracticeDto} from './dto/update-practice.dto';
import { GenericService } from 'src/generic/generic.service';
import { Practice } from './entities/practice.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PracticeService extends GenericService<Practice>  {
  constructor(
    @InjectRepository(Practice)
    private practiceRepository: Repository<Practice>,
  ) {super(practiceRepository)}

}
