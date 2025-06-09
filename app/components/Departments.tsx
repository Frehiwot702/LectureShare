'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ICourseDepartment } from '@/models/CourseDepartment'



const Departments = () => {

    const [dept, setDept] = useState<ICourseDepartment[]>([])
    const [loading, setLoading] = useState(false)


     useEffect(() => {
        try{
            const fetchDept = async () => {
                const res = await fetch('api/coursesDepartment')
                if(!res.ok) throw new Error('Failed to fetch departments');
                const data = await res.json();
                setDept(data);
            }

            fetchDept();
            
        } catch(error) {
            console.error(error);
        }
    }, [])
    console.log('dept from component: ', dept)

    if (loading) return <p>Loading...</p>
    if (dept.length === 0) return <p>No departments available.</p>

  return (
    <div className='w-full py-10'>
        

        <h3 className='text-3xl font-bold'>Department</h3>
        <div className='space-y-8 py-10'>
            {
                dept.map((fieldItem) => (
                    // items id must be on the top-level React element returned by .map()
                    <div key={fieldItem.id} className='border border-white px-10 py-5 rounded-lg bg-white/30 hover:bg-gray-200'>
                        <Link  href={`lectures/lecture/${fieldItem._id}`} className='font-bold text-xl hover:text-amber-600'>{fieldItem.name}</Link>
                        <p>{fieldItem.description}</p>
                    </div>
                ))
            }
            
        </div>
       
    </div>
  )
}

export default Departments