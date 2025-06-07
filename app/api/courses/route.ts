import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/lib/db";
import Course, {ICourse} from "@/models/Course";

// GET /api/courses
export async function GET(req: NextRequest, res: NextResponse) {
  
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


// TypeScript needs to know the type of request.
export async function POST(request: NextRequest) {
  try {
      const {name, description, level, school}  = await request.json();

      await connectDb();
      await Course.create({name, description, level, school})

      return NextResponse.json({message: "Course Created!"}, {status: 201})
  } catch(error) {
      console.error('Error creating course:', error);
      return NextResponse.json({ message: error }, { status: 500 });
  }
 
  
}
