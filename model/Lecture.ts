import mongoose, {Document, Schema} from "mongoose";


// Document: instance of data that adheere a specific schema specified by developer
// Characteristics of a Document
// 1. Fields and Values
// 2. Persistence: Once created, a document persists in the database until explicitly removed or modified.
// 3. Instance Methods: Documents inherit built-in and custom instance methods defined on their corresponding model’s schema.
// 4. Flexibility:  can also include additional fields that are not specified in the schema

interface iLecture extends Document {
    title: string,
    content: string,
    courseId: string,
    universityId: string,
    tag: string,
    upload:  {
        data: Buffer,
        contentType: String
    }
    createdAt: Date,
    userId: 12
}

// Schema: Defines the structure of Document above, specifying fields and their types, default values, requrement and more...

const LectureSchema: Schema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    courseId: {type: String, required: true},
    universityId: {type: String, required: true},
    courseName: {type: String, required: true},
    note: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
})

const Lecture = mongoose.models?.Lecture || mongoose.model<iLecture>('Lecture', LectureSchema)

export default Lecture;