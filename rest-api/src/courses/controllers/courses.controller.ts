import { Controller, Get, Put, Param, Body } from "@nestjs/common";
import { Course } from '../../../../shared/course';
import { CoursesRepository } from "../repositories/courses.repository";

@Controller()
export class CoursesController {

    constructor(private coursedb: CoursesRepository) {}

    @Get('/api/courses')
    async findAllCourses(): Promise<Course[]> {
        return this.coursedb.findAll();
    }

    @Put('/api/courses/:courseId')
    async updateCourse(@Param('courseId') courseId: string, @Body() changes: Partial<Course>) {
        console.log('update course');
    }
}