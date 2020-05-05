import { Controller, Get, Put, Param, Body, Delete, Post, UseFilters } from "@nestjs/common";
import { Course } from '../../../../shared/course';
import { CoursesRepository } from "../repositories/courses.repository";
import { HttpExceptionFilter } from "../../../src/filters/http.filter";

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
    @UseFilters(new HttpExceptionFilter())
    async updateCourse(@Param('courseId') courseId: string, @Body() changes: Partial<Course>): Promise<Course> {
        return this.coursedb.updateCourse(courseId, changes);
    }

    @Delete(':courseId')
    async deleteCourse(@Param('courseId') courseId: string): Promise<Course> {
        return this.coursedb.deleteCourse(courseId);
    }
}