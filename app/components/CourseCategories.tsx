'use client'
import React, { useEffect, useState } from 'react'
import { courses, fields } from '@/models/database'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ICourse } from '@/models/Course'

interface Props {
  departmentId: string;
}

const CourseCategories = ({departmentId} : Props) => {

    const [courses, setCourses] = useState<ICourse[]>([])
    const [loading, setLoading] = useState(true)
    console.log('id from component: ', courses)

    

    useEffect(() => {
        try {
            const fetchCourse = async () => {
                const res = await fetch(`/api/departmentCourses/${departmentId}`)
                if(!res.ok) throw new Error('Failed to fetch courses');
                const data = await res.json();
                setCourses(data);
                setLoading(false)
            }
            fetchCourse();
            
        } catch(error) {
            console.error(error);
        }

    }, [])

    
    if (loading) return <p>Loading ...</p>
    if (courses.length === 0) return <p>No courses available.</p>
    
  return (
    <div className='w-full py-10'>
        
        <div className='gap-8 py-10 grid grid-cols-3 space-y-3 '>
            {
                courses.map((courseitem) => (
                    <Link key={courseitem._id} href={`/lectures/courses/${courseitem._id}`} className='hover:bg-amber-600'>
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