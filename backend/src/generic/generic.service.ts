import {Injectable, NotFoundException} from '@nestjs/common';
import {Generic} from './entities/generic.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {DeleteResult, FindOptionsWhere, Repository, UpdateResult} from 'typeorm';

@Injectable()
export class GenericService<Entity> {
    constructor(
        @InjectRepository(Generic)
        private readonly repository: Repository<Entity>) {
    }


    async create(dto): Promise<any> {
        try {
            return await this.repository.save(dto);
        } catch (e) {
            return e.sqlmessage ?? e
        }
    }

    async findAll(): Promise<any> {
        try {
            return await this.repository.find();
        } catch (e) {
            return e.sqlmessage ?? e
        }
    }

    async findOne(id: any): Promise<any> {
        try {
            const result = await this.repository.findOneBy({id: id} as FindOptionsWhere<Entity>);
            if (!result) {
                throw new NotFoundException()
            }
            return result
        } catch (e) {
            return e.sqlmessage ?? e
        }
    }

    async update(id: string, dto): Promise<UpdateResult> {
        try {
            return await this.repository.update(id, dto);
        } catch (e) {
            console.log(e)
            return e.sqlmessage ?? e
        }
    }

    async delete(id: any): Promise<DeleteResult> {
        try {
            return await this.repository.delete(id);
        } catch (e) {
            return e.sqlmessage ?? e
        }
    }
}

