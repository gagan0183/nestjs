import { Controller, Get, Put, Param, Body, Delete, Post } from "@nestjs/common";
import { Course } from '../../../../shared/course';
import { CoursesRepository } from "../repositories/courses.repository";

@Controller('courses')
export class CoursesController {

    constructor(private coursedb: CoursesRepository) {}

    @Post()
    async addCourse(@Body() course: Partial<Course>) {
        return this.coursedb.addCourse(course);
    }

    @Get()
    async findAllCourses(): Promise<Course[]> {
        return this.coursedb.findAll();
    }

    @Put(':courseId')
    async updateCourse(@Param('courseId') courseId: string, @Body() changes: Partial<Course>): Promise<Course> {
        console.log('update course');
        return this.coursedb.updateCourse(courseId, changes);
    }

    @Delete(':courseId')
    async deleteCourse(@Param('courseId') courseId: string): Promise<Course> {
        return this.coursedb.deleteCourse(courseId);
    }
}