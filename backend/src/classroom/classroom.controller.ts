import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {ClassroomService} from './classroom.service';
import {CreateClassroomDto} from './dto/create-classroom.dto';
import {UpdateClassroomDto} from './dto/update-classroom.dto';

@Controller('classroom')
export class ClassroomController {
  constructor(private readonly classroomService: ClassroomService) {
  }

  @Post(":id")
  create(@Body() createClassroomDto: CreateClassroomDto, @Param("id") id) {
    return this.classroomService.createClass(id, createClassroomDto);
  }

  // @Get()
  // findAll() {
  //   return this.classroomService.findAll();
  // }
  //
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   console.log(id)
  //   return this.classroomService.findOne(id);
  // }
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateClassroomDto: UpdateClassroomDto) {
  //   return this.classroomService.update(id, updateClassroomDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.classroomService.delete(id);
  // }
}
