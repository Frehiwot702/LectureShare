import React from 'react'
import Lecturecategories from '../components/Lecturecategories'

const Lectures = () => {
  return (
    <div className='py-16'>
        <h3 className='text-5xl font-bold text-center'>Welcome to  LECTURE<span className='text-amber-600'>SHARE</span></h3>
        <p className='text-lg text-center text-black/50'>Explore different courses shared across different universities, from different trusted individuals.</p>
        <Lecturecategories/>
       
    </div>
  )
}

export default Lectures