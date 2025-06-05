"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavBar = () => {

    const currentPath = usePathname()
    console.log('current path: ', currentPath)
    
    const menu = [
        {
            label: 'Dashboard',
            path: '/'
        },
        {
            label: 'About',
            path: '/about'
        },
        {
            label: 'Lectures',
            path: '/lectures'
        },
        {
            label: 'Contact',
            path: '/contact'
        }
    ]

  return (
    <nav className='p-3 flex justify-between border-b-2 border-white/50'>
        <h3 className='text-3xl font-bold'>
           <Link href="/">LECTURE<span className='text-amber-600'>SHARE</span></Link> 
        </h3>

        <ul className='flex items-center space-x-10 '>
            {
                menu.map((menuItem) => (
                    <li key={menuItem.label} className={`${menuItem.path === currentPath ? `text-amber-600` : `text-black`} text-md font-old hover:underline text-xl`}><Link href={menuItem.path}>{menuItem.label} </Link></li>
                )) 
            }

            <button
                
                className='text-xl font-bold bg-amber-600 px-6 py-2 rounded-full hover:cursor-pointer hover:border-2 hover:border-amber-600 hover:bg-transparent hover:text-amber-600'
            >Sign In</button>
        </ul>
    </nav>
  )
}

export default NavBar;