import mongoose, {Document, Model, Schema} from "mongoose";


export interface ICourseDepartment extends Document {
    name: string,
    description: string
}

const CourseDepartmentSchema: Schema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
})

const CourseDepartment: Model<ICourseDepartment> = mongoose.models?.CourseDepartment || mongoose.model<ICourseDepartment>('CourseDepartment', CourseDepartmentSchema)

export default CourseDepartment;