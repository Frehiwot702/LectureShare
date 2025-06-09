import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/lib/db";
import CourseDepartment, {ICourseDepartment} from "@/models/CourseDepartment";

// GET /api/courses
export async function GET(request: NextRequest) {
  try {

    await connectDb();
      
    const dept: ICourseDepartment[] = await CourseDepartment.find();
    return NextResponse.json(dept)
   
  } catch (error) {
    console.error('Failed to fetch courses dept:', error);
    return NextResponse.json({ message: "Failed to fetch courses dept" }, {status: 500 });
  }
}

