import Link from 'next/link'
import React from 'react'

interface User {
  id: number;
  name: string;
}

const ProductsPage = async () => {

  // Caching - to store data to access faster, used in fetch function, cache is by default on when fetching  and is treated as static page render.
  const result = await fetch('https://jsonplaceholder.typicode.com/users', // once rendered, to avoid refetching datas over and over again, store it in cache
                            // {cache: 'no-store'}              // to disable chaching, data is going to change so its treated as a dynamic page render
                            // {next: {revalidate: 10}}         // to get fresh data every 10 sec.    
                            );

  // Rendering Types on server-side: static & dynamic
    // static: render UI at build time
    // dynamic: render at request time
  const users:User[] = await result.json();

  return (
    <div className='p-5'>
      <h3 className='text-3xl font-bold py-3'>Users List</h3>
      <ul>
        {users?.map((user) => 
           (<li key={user.id} className=''><Link href={`/products/${user.id}`}> {user.name}</Link> </li>)
        )}
         
        
      </ul>
    </div>
  )
}

export default ProductsPage