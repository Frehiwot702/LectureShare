import { NextResponse } from "next/server";
import connectDb from "@/lib/db";
import Course, {iCourse} from "@/model/Course";
import { NextApiRequest, NextApiResponse } from "next";

// GET /api/courses
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  
  try {
    await connectDb();
        console.log('connection: ' , connectDb);
    const courses: iCourse[] = await Course.find({});
        console.log('connection from route, ', courses)
    
        const formattedData = courses.map(course => ({
            _id: course._id.toString(),
            name: course.name,
        }))
    res.status(200).json(formattedData)
  } catch (error) {
    console.error('Failed to fetch courses:', error);
    res.status(500).json({ message: "Failed to fetch courses" });
  }
}
