import mongoose, {Document, Model, Schema, Types} from "mongoose";
import { ISchool } from "./School";
import { ICourseDepartment } from "./CourseDepartment";

export enum CourseLevel {
  Degree = 1,
  Masters = 2,
  PhD = 3,
  Diploma = 4,
}


export interface ICourse extends Document {
    name: string,
    description: string,
    level: CourseLevel,
    courseDepartment: Types.ObjectId | ICourseDepartment,
    school: Types.ObjectId | ISchool;
}

const CourseSchema: Schema = new Schema({
    name: { type: String, required: true},
    description: { type: String, required: true},
    level: { type: Number, required: true, enum: Object.values(CourseLevel).filter(val => typeof val === 'number')},
    courseDepartment: { type: Schema.Types.ObjectId, required: true,  ref: 'CourseDepartment'},
    school: { type: Schema.Types.ObjectId, ref: 'School', required: true },
})

const Course: Model<ICourse> = mongoose.models?.Course || mongoose.model<ICourse>('Course', CourseSchema)

export default Course;