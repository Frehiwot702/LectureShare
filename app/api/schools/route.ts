import connectDb from "@/lib/db";
import School from "@/models/School";
import { NextRequest, NextResponse } from "next/server";

// TypeScript needs to know the type of request.
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