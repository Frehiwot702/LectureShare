import React from 'react'
import { fields } from '@/model/database'
import UniversityCategories from '@/app/components/UniversityCategories'
import Lecturecategories from '@/app/components/Lecturecategories'
import CourseCategories from '@/app/components/CourseCategories'

const Lecture = async () => {

  return (
    <div className='relative'>
        <div className='bg-black min-h-48 px-8 text-white'>
            <h3 className='text-5xl font-bold flex items-end pt-24'>Lecture Materials on <span className='text-amber-600'> - Health Science</span></h3>
        </div>

        <div className='w-full py-16'>
            <div className='flex justify-between'>
                <h3 className='text-4xl font-bold'>Explore Lectures</h3>
                <input 
                    type='text'
                    placeholder='Search'
                    className='border border-gray-400 rounded-full px-5 py-2 w-3/8'/>
            </div>
            <CourseCategories/>
        </div>
        
    </div>
  )
}

export default Lecture