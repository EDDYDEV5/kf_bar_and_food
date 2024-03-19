import React from 'react'
import kfbar from '../assets/imgs/kfbar.png' 
import { FaLocationDot } from "react-icons/fa6";

const About = () => {
  return (
    <div className='w-ful md:h-screen h-full bg-indigo-50 text-gray-600 flex flex-col items-center justify-center'>
  
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 md:flex-row  '>
        
            <div className=' px-2  md:w-2/3'>
            <h1 className=' text-4xl font-sansita text-center text-indigo-950 inline mb-6'>About</h1>
                <p className=' py-6 pb-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit iusto, culpa dolorum dolorem unde nisi atque obcaecati? Futinctio, iure eaque sapiente doloremque a quas in, soluta tempore voluptatum velit beata</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ullam cum aspernatur accusantium suscipit aliquam, ex aliquid rerum magnam alias, veritatis dolore deserunt assumenda abhjdjkj'ka sequi numquam recusandae quos non rem ipsum doiquam pariatur at modi! Ut iure eaque sapiente doloremque a quas in, soluta tempore voluptatum velit beatae autem asperiores.</p>
                
        <div className=' flex justify-center py-6'>
        <FaLocationDot size={32} />
        <p className='italic text-xl font-semibold '> No. 28A Waterworks Road Abakaliki, Ebonyi State </p>
        </div>
     
        
            </div>
            <div className=' px-6 w-64 py-4'>
              <img src={kfbar} alt="" className='rounded-lg' />
              <p className=' font-sansita tracking-wide'>We fulfill your comfort and food cravings.</p>
            </div>
            
        </div>
        
     
    </div>
  )
}

export default About