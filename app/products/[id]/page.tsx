"use client"
import { useParams } from 'next/navigation';
import React from 'react'
import userDetail from '@/app/components/userDetail';



const page = async ({params} : {
     params: Promise <{
        id: number
    }>
}) => {

    const result = await fetch('https://jsonplaceholder.typicode.com/users' + params.id)
    const user = await result.json()
    
    console.log('result: ', result)

    return (
        <div> 
            hello {user}
        </div>
    )
}

export default page