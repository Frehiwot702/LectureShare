import mongoose from "mongoose";

const connectDb = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI!);
        console.log('Connection successful')
    } catch(error){
        console.log('Error connecting: ', error)
        process.exit(1)
    }
}

export default connectDb;