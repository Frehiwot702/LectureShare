import React from 'react'

const Addlecture = () => {
  return (
    <div className='relative py-16 '>
        <h3 className='text-4xl font-bold text-center'>Add Lecture Note</h3>
        <form encType='multipart/form-data' method='POST' className='text-xl w-1/2 m-auto grid gap-8'>
            <div className='grid gap-3'>
                <label className='font-bold text-2xl'>Title</label>
                <input 
                    type='text' 
                    name='title' 
                    placeholder='Enter title of the lecture'
                    className='w-full px-3 py-2 rounded-lg border border-gray-400'/>
            </div>
            <div className='grid gap-3'>
                <label>University</label>
                <input 
                    type='text' 
                    name='university' 
                    placeholder='Enter university source'
                    className='w-full px-3 py-2 rounded-lg border border-gray-400'/>
            </div>
            <div className='grid gap-3'>
                <label>Course</label>
                <input 
                    type='text' 
                    name='course' 
                    placeholder='Enter course'
                    className='w-full px-3 py-2 rounded-lg border border-gray-400'/>
            </div>
            <div className='grid gap-3'>
                <label>Add tags</label>
                <input 
                    name='tag' 
                    placeholder='Select tags related to the lecture material'
                    className='w-full px-3 py-2 rounded-lg border border-gray-400'/>
            </div>
            <div className='grid gap-3'>
                <label>Upload Lecture</label>
                <p className='text-red-500 text-sm'>*must be in PDF format</p>
                <input 
                    type='file'
                    name='tag' 
                    placeholder='Select tags related to the lecture material'
                    className='w-full px-3 py-2 rounded-lg border border-gray-400'/>
            </div>

            <button
                className='w-full bg-amber-600 py-2 rounded-full text-white'
            >
                Submit
            </button>
           

            
        </form>
    </div>
  )
}

export default Addlecture