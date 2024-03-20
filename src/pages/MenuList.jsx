import React from 'react'
import { Link } from "react-router-dom";



function MenuList({title}) {
  
  return(
    <>
    <div className=" bg-indigo-950 text-indigo-100 w-full ">
    <div className="flex  text-4xl md:p-9   justify-center py-2 ">
    <h1 className="text-3xl md:text-6xl font-sansita tracking-widest ">{title}</h1>
    </div>
    <div className='flex justify-center items-center font-tektur  text-xl md:text-3xl py-2'>
    <Link className=' hover:scale-125 px-4' to='/'>All</Link>
    <Link className=' hover:scale-125 ' to='/food'>Foods</Link>
      
      </div>
      </div>
   </> 
    )
}
export default MenuList;