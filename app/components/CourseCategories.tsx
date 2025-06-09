'use client'
import React, { useEffect, useState } from 'react'
import { courses, fields } from '@/models/database'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ICourse } from '@/models/Course'

const CourseCategories = ({departmentId} : {
    departmentId: {
        departmentId: string
    }
}) => {

    const [courses, SetCourses] = useState<ICourse[]>([])
    console.log('id from component: ', departmentId)

    useEffect(() => {
        try {
            const fetchCourse = async () => {
                const res = await fetch(`api/departmentCourses/${departmentId}`)
                if(!res.ok) throw new Error('Failed to fetch courses');
                const data = await res.json();
                SetCourses(data);
            }
            fetchCourse();
            
        } catch(error) {
            console.error(error);
        }

    }, [])

  return (
    <div className='w-full py-10'>
        
        <div className='gap-8 py-10 grid grid-cols-3 space-y-3 '>
            {
                courses.map((courseitem) => (
                    <Link key={courseitem.id} href={`/lectures/courses/${courseitem.id}`} className='hover:bg-amber-600'>
                        <div className='border border-white px-10 rounded-lg bg-white/30 hover:bg-gray-200 py-10'>
                            <h3  className='font-bold text-3xl'>{courseitem.name}</h3>
                            <p>{courseitem.description}</p>
                        </div>
                    </Link>
                ))
            }
            
        </div>
       
    </div>
  )
}

export default CourseCategories