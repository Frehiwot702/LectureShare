'use client'
import { ICourseDepartment } from '@/models/CourseDepartment';
import { ISchool } from '@/models/School'
import React, { useEffect, useRef, useState } from 'react'
import { boolean } from 'zod/v4';

const AddCourse = () => {

    const [schools, setSchools] = useState<ISchool[]>([]);
    const [dept, setDept] = useState<ICourseDepartment[]>([]);
    const [responses, setResponses] = useState();

    const dialogRef = useRef<HTMLDialogElement | null>(null);

    const openDialog = () => {
        dialogRef.current?.showModal();
    };

    const closeDialog = () => {
        dialogRef.current?.close();
    };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        try {
            const formData = new FormData(e.currentTarget);

            const courseData = {
                name: formData.get('name'),
                description: formData.get('description'),
                level: formData.get('level'),
                school: formData.get('school'),
                courseDepartment: formData.get('courseDepartment')
            };

            const res = await fetch('/api/courses', {
                method: 'POST',
                 headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(courseData),
            });

            const response = await res.json();
            if (!response.ok) {
                console.error('Error creating course');
            }
           

            console.log('submitted data: ', courseData)
            openDialog();
        } catch(error:any) {
            console.log(error)
        }
    }

     useEffect(() => {
        try {
            const fetchSchools = async () => {
                const school_res = await fetch('/api/schools')
                if(!school_res.ok) throw new Error('Failed to fetch school');
                const school_data = await school_res.json();
                setSchools(school_data);
            }
            fetchSchools();
        } catch(error) {
            console.error(error);
        }
    }, [])

    useEffect(() => {
        try{
            const fetchDept = async () => {
                const dept_res = await fetch('/api/coursesDepartment')
                if(!dept_res.ok) throw new Error('Failed to fetch department');
                const dept_data = await dept_res.json();
                setDept(dept_data);
            }
            fetchDept();
        } catch(error) {
            console.error(error);
        }
    }, [])

  return (
    <div className='py-10'>
        
        <dialog
            ref={dialogRef}
            className="rounded-lg w-full max-w-md p-6 shadow-lg absolute backdrop:bg-black/40 m-auto"
        >
            <h2 className="text-xl font-bold mb-4 text-amber-600 border-b-2 border-gray-300">Course Info</h2>
            <p className="text-gray-700"> Course Added Successfully </p>

            <div className="mt-6 text-right">
                <button
                    onClick={closeDialog}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
                >
                    Close
                </button>
            </div>
        </dialog>
        
        

        <h3 className='text-3xl font-bold'>Add Course</h3>
        <form method='POST' encType='multipart/form-data' onSubmit={handleSubmit} className='py-5 space-y-5 text-xl'>
            <h3 className='font-bold'>Course Information</h3>
            <input
                required
                name='name'
                type='text'
                placeholder='Enter course name'
                className='w-1/2 block px-3 py-3 border-b-2'
            />

            <input
                required
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
                <h3 className='font-bold'>Department</h3>
                <select
                    required
                    name="courseDepartment"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                >
                    <option value="" disabled>Select a department</option>
                    {dept.map((dep) => (
                        <option 
                            key={dep._id} 
                            value={dep._id}
                        >
                            {dep.name}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <h3 className='font-bold'>School</h3>
                <select
                    required
                    name="school"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    >
                    <option value="" disabled>Select a school</option>
                    {schools.map((school) => (
                        <option 
                            key={school._id} 
                            value={school._id}
                        >
                            {school.name}
                        </option>
                    ))}
                    </select>
            </div>

            <button
                type='submit'
                className='bg-orange-600 text-white px-10 py-2 rounded-full'
            >Submit</button>
           
        </form>
    </div>
  )
}

export default AddCourse