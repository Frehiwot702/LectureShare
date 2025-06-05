import CourseCategories from '@/app/components/CourseCategories'
import UniversityCategories from '@/app/components/UniversityCategories'
import React from 'react'
import { tags } from '@/model/database'

const page = () => {
  return (
    <div>
        <div className='bg-black min-h-48 px-8 text-white'>
            <h3 className='text-5xl font-bold flex items-end pt-24'>Lecture Materials on <span className='text-amber-600'> - Health Science</span></h3>
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
                        <span className='border border-gray-300 rounded-full px-5 py-2 hover:bg-amber-600 hover:text-white'> {tag.name}</span>
                    ))}
                </div>
                <CourseCategories/>
            </div>
        </div>
    </div>
  )
}

export default page