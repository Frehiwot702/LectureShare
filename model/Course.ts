import mongoose, {Document, Model, Schema} from "mongoose";


export interface iCourse extends Document {
    name: string,
   
}

const CourseSchema: Schema = new Schema({
    name: {type: String, required: true},
})

const Course: Model<iCourse> = mongoose.models?.Course || mongoose.model<iCourse>('Course', CourseSchema)

export default Course;