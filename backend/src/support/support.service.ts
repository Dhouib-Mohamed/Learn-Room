import {Injectable} from '@nestjs/common';
import {CreateSupportDto} from './dto/create-support.dto';
import {UpdateSupportDto} from './dto/update-support.dto';
import { Support } from './entities/support.entity';
import { GenericService } from 'src/generic/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SupportService extends GenericService<Support> {
  constructor(
    @InjectRepository(Support)
    private supportRepository: Repository<Support>,
  ) {super(supportRepository)}

}
