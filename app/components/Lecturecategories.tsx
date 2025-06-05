import Link from 'next/link'
import React from 'react'
import { fields } from '@/model/database'

const Lecturecategories = () => {

  return (
    <div className='w-full py-10'>
        

        <h3 className='text-3xl font-bold'>Categories</h3>
        <div className='space-y-8 py-10'>
            {
                fields.map((fieldItem) => (
                    <div className='border border-white px-10 py-5 rounded-lg bg-white/30 hover:bg-gray-200'>
                        <Link key={fieldItem.id} href={`lectures/lecture/${fieldItem.id}`} className='font-bold text-xl hover:text-amber-600'>{fieldItem.field}</Link>
                        <p>{fieldItem.description}</p>
                    </div>
                ))
            }
            
        </div>
       
    </div>
  )
}

export default Lecturecategories