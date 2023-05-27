import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGenericDto } from './dto/create-generic.dto';
import { UpdateGenericDto } from './dto/update-generic.dto';
import { Generic } from './entities/generic.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, FindOptionsWhere, Repository } from 'typeorm';

@Injectable()
export class GenericService<Entity extends Generic > {
  constructor(
    @InjectRepository(Generic)
    private readonly repository: Repository<Entity>) {}


    async create(dto: CreateGenericDto): Promise<any> {
      const generic = this.repository.create(dto as DeepPartial<Entity>);
      return this.repository.save(generic);
    }

    async findAll(): Promise<any> {
        return this.repository.find();
    }

    async findOne(id: any): Promise<any> {
        return this.repository.findOneBy({ id: id } as FindOptionsWhere<Entity>);

    }

    async update(id: any, dto: UpdateGenericDto): Promise<Entity> {
      const entityToUpdate = await this.repository.findOne(id);
      if (!entityToUpdate) {
        throw new NotFoundException();
      }
      const updatedEntity = Object.assign(entityToUpdate, dto);
      return this.repository.save(updatedEntity);
    }

    async delete(id: any): Promise<void> {
        await this.repository.delete(id);
    }
  
}

