import { Injectable, HttpException, BadRequestException } from "@nestjs/common";
import { Course } from "../../../../shared/course";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';

@Injectable()
export class CoursesRepository {
    
    constructor(@InjectModel('course') private courseModel: Model<Course>) {}

    async findAll(): Promise<Course[]> {
        return this.courseModel.find();
    }

    async updateCourse(courseId: string, changes: Partial<Course>) : Promise<Course> {
        return this.courseModel.findOneAndUpdate({ _id: courseId }, changes, { new: true });
    }

    async deleteCourse(courseId: string) {
        return this.courseModel.deleteOne({ _id: courseId });
    }

    async addCourse(course: Partial<Course>): Promise<Course> {
        const newCourse = new this.courseModel(course);
        await newCourse.save();
        return newCourse.toObject({versionKey: false});
    }
}