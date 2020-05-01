import { Module } from "@nestjs/common";
import { CoursesModule } from "./courses/courses.module";
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_URI } from "./constants";

@Module({
    imports: [CoursesModule, MongooseModule.forRoot(MONGO_URI)]
})
export class AppModule {

}