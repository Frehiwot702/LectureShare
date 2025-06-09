'use client'
import { ISchool } from '@/models/School'
import React, { useEffect, useState } from 'react'

const AddCourse = () => {

    const [schools, setSchools] = useState<ISchool[]>([]);


     useEffect(() => {
        try{
            const fetchSchools = async () => {
                const res = await fetch('/api/schools')
                if(!res.ok) throw new Error('Failed to fetch school');
                const data = await res.json();
                setSchools(data);
            }

            fetchSchools();
            
        } catch(error) {
            console.error(error);
        }
    }, [])

  return (
    <div className='py-10'>
        <h3 className='text-3xl font-bold'>Add Course</h3>
        <form method='POST' encType='' className='py-5 space-y-5 text-xl'>
            <h3 className='font-bold'>Course Information</h3>
            <input
                name='name'
                type='text'
                placeholder='Enter course name'
                className='w-1/2 block px-3 py-3 border-b-2'
            />

            <input
                name='description'
                type='text'
                placeholder='Enter course description'
                className='w-1/2 block px-3 py-3 border-b-2'
            />

            <h3 className='font-bold'>Level</h3>

            <div className='space-x-3'>
                <input
                    name='level'
                    value='1'
                    type='radio'
                    className=''
                />
                <label>Degree</label>
                
                
                <input
                    name='level'
                    value='2'
                    type='radio'
                    className=''
                />
                <label>Masters</label>
                
                <input
                    name='level'
                    value='3'
                    type='radio'
                    className=''
                />
                <label>PhD</label>

                <input
                    name='level'
                    value='4'
                    type='radio'
                    className=''
                />
                <label>Diploma</label>

                
            </div>
            <div>
                <h3 className='font-bold'>School</h3>
                <select
                    name="school"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    >
                    <option value="" disabled>Select a school</option>
                    {schools.map((school) => (
                        <option key={school._id} value={school._id}>
                            {school.name}
                        </option>
                    ))}
                    </select>
            </div>

            <button
                className='bg-orange-600 text-white px-10 py-2 rounded-full'
            >Submit</button>
           
        </form>
    </div>
  )
}

export default AddCourse