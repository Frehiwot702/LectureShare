import React from 'react'
import { universities } from '@/model/database'

const UniversityCategories = () => {



  return (
    <div className='w-1/3 py-10'>
        <h3 className='text-3xl font-bold'>Universities & Collages</h3>
        <ul className='py-5'>
            <form className='space-y-3'>
                {
                    universities.map((univ) => (
                        <li className='text-lg space-x-3 border-b-2 border-gray-200 py-3' key={univ.id}>
                            <input 
                                name='university'
                                type='radio'
                                value={univ.id}/>
                            <label>{univ.name}</label>
                        </li>
                    ))
                }
            </form>
           
        </ul>
    </div>
  )
}

export default UniversityCategories