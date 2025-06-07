import mongoose, {Document, Model, Schema} from "mongoose";


export interface ISchool extends Document {
    name: string,
}

const SchoolSchema: Schema = new Schema({
    name: {type: String, required: true},
})

const School: Model<ISchool> = mongoose.models?.School || mongoose.model<ISchool>('School', SchoolSchema)

export default School;