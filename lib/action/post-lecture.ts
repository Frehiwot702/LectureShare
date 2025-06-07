'use server'
import connectDb from "../db"
import {z} from 'zod'
import Lecture from "@/models/Lecture"
import { revalidatePath } from 'next/cache'
import { redirect } from "next/navigation"

// Zod: TypeScript-first schema validation with static type inference

const LectureSchema = z.object({
    
})
