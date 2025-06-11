import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/lib/db";
import Course, {ICourse} from "@/models/Course";
import { z } from 'zod';

// GET /api/courses
export async function GET(request: NextRequest) {
  try {
    await connectDb();
      
    const courses: ICourse[] = await Course.find();
    return NextResponse.json(courses)
   
  } catch (error) {
    console.error('Failed to fetch courses:', error);
    return NextResponse.json({ message: "Failed to fetch courses" }, {status: 500 });
  }
}


// TypeScript needs to know the type of request.
export async function POST(request: NextRequest) {
  try {
      const body  = await request.json();
      console.log('from course route: ', body)

      await connectDb();
      await Course.create(body)

      return NextResponse.json({message: "Course Created!"}, {status: 201})
  } catch(error) {
      console.error('Error creating course:', error);
      return NextResponse.json({ message: error }, { status: 500 });
  }
 
  
}
