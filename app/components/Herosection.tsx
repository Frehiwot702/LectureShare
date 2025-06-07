import Image from 'next/image'
import React from 'react'

const Herosection = () => {
  return (
    <div className='w-full grid grid-cols-2 px-3 py-16 h-screen'>
        <div className='space-y-3 my-auto'>
            <h3 className='text-7xl font-bold'>Share Lecture Materials</h3>
            <p className='text-lg w-3/4'>Loremums empsum Loremums empsumLoremums empsumLoremums empsumLoremums empsumLoremums empsum empsumLoremums empsum</p>

            <button
                className='bg-amber-600 rounded-full px-8 py-2 text-2xl text-white mt-5'
            >Get Started</button>

        </div>
        <div className='space-y-10 grid p-10'>
            <Image src='./image02.jpg' alt='lecture' className='w-2/3'/>
            <Image src='./image01.jpg' alt='lecture'  className='w-1/2'  />
        </div>
    </div>
  )
}

export default Herosection