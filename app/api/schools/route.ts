import connectDb from "@/lib/db";
import School, { ISchool } from "@/models/School";
import { NextRequest, NextResponse } from "next/server";

// TypeScript needs to know the type of request.
export async function GET(request: NextRequest) {
    try {
        await connectDb();
        const school: ISchool[] = await School.find();

        return NextResponse.json(school)

    } catch (error) {
        return NextResponse.json({message: error}, { status: 500});
    }
}


export async function POST(request: NextRequest) {
  try {
      const {name}  = await request.json();

      await connectDb();
      await School.create({name})

      return NextResponse.json({message: "School Created!"}, {status: 201})
  } catch(error) {
      console.error('Error creating school:', error);
      return NextResponse.json({ message: error }, { status: 500 });
  }
 
  
}