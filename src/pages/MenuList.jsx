import React from 'react'
import { Link } from "react-router-dom";



function MenuList({title}) {
  
  return(
    <>
    <div class=" bg-indigo-950 text-indigo-100 w-full">
    <div class="flex  text-4xl justify-center py-2 ">
    <h1 class="text-3xl font-sansita tracking-widest ">{title}</h1>
    </div>
    <div className='flex justify-center items-center font-tektur p-5  text-xl '>
    <Link className=' hover:scale-125' to='/'>All</Link>
    <Link className=' px-12 hover:scale-125 ' to='/food'>Food</Link>
      <Link className=' hover:scale-125' to='/drinks'>Drinks</Link>
      </div>
      </div>
   </> 
    )
}
export default MenuList;