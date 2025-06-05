'use client'
import CourseCategories from '@/app/components/CourseCategories'
import UniversityCategories from '@/app/components/UniversityCategories'
import React, { useEffect, useState } from 'react'
import { tags } from '@/model/database'
import { ObjectId } from 'mongoose'
import connectDb from "@/lib/db";

type Course = {
  _id: string;
  name: string;
};

const page = () => {

    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
    // Fetch the notes from our API endpoint
        fetch("api/courses")
        .then((res) => res.json())  // Parse JSON response
        .then((data) => setCourses(data)); // Store notes in state
    }, []);
    console.log('courses fetched: ', connectDb)

  return (
    <div>
        <div className='bg-black min-h-48 px-8 text-white'>
            <h3 className='text-5xl font-bold flex items-end pt-24'>Course lists on <span className='text-amber-600'> - Nursing</span></h3>
        </div>
        <div className='w-full flex py-16 gap-10'>
            <UniversityCategories/>
            <div className='py-10'>
                <div className='flex justify-between'>
                    <h3 className='text-4xl font-bold'>Explore Courses</h3>
                    <input 
                        type='text'
                        placeholder='Search'
                        className='border border-gray-400 rounded-full px-5 py-2 w-3/8'/>
                </div>
                <div className='flex space-x-10 pt-10'>
                    {tags.map((tag) => (
                        <span key={tag.id} className='border border-gray-300 rounded-full px-5 py-2 hover:bg-amber-600 hover:text-white'> {tag.name}</span>
                    ))}
                </div>
                <CourseCategories/>
            </div>
        </div>
    </div>
  )
}

export default page