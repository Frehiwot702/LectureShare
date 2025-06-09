import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/lib/db";
import Course, { ICourse } from "@/models/Course";
import mongoose from "mongoose";


export async function GET(request: NextRequest, { params }: { params: { _id: string } }) {
  try {
    await connectDb();
      
    const departmentId = new mongoose.Types.ObjectId(params._id);
    const course: ICourse[] = await Course.find({courseDepartment: departmentId});
    return NextResponse.json(course)
   
  } catch (error) {
    console.error('Failed to fetch courses dept:', error);
    return NextResponse.json({ message: "Failed to fetch courses" }, {status: 500 });
  }
}