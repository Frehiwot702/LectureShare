import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full grid grid-cols-3 gap-10 text-lg relative'>
        <div>
            <h3 className='text-4xl font-bold'>
                <Link href="/">LECTURE<span className='text-amber-600'>SHARE</span></Link> 
            </h3>
            <p className='text-md text-justify'>
                Loreums epsumLoreum epsum Loreums epsumLoreum epsum Loreums epsumLoreum epsum Loreums epsumLoreum epsum Loreums epsumLoreum epsum 
            </p>
        </div>
        <div>
            <h3 className='text-3xl font-bold'>Contact</h3>
            <ul>
                <li>Addis Ababa, Ethiopia</li>
                <li>P.O.Box: 45362</li>
                <li>lectureshareinfo@gmail.com</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer