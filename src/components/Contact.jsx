import React from 'react'
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6"
import { MdEmail } from "react-icons/md";



const Contact = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
      };
const socials =[
    {
        id: 1,
        icons: <FaInstagramSquare size={32} />
    },
    {
        id: 2,
        icons: <MdEmail size={35} />
    },
    {
        id: 3,
        icons: <FaFacebookSquare size={32} />
    },
    
    {
        id: 5,
        icons: <FaSquarePhone size={32} />
    },
]

    

    return (
      <div name="contact" className=' w-full h-full bg-indigo-50 flex flex-col justify-center px-4'>
          <div className=' flex flex-col  justify-center  max-w-screen-lg mx-auto '>

          <ul className=' flex w-full justify-center py-6 items-center text-xl'>
  {socials.map(({id, icons}) => (
    <li key={id} className=' text-indigo-950 font-bold text-indi tracking-wide px-5 hover:scale-125 cursor-pointer'>
     {icons}
    </li>
  ))}
  </ul>
            
                  <h1 className=' text-indigo-950 font-bold text-4xl font-sansita'>Contact</h1>
                  <p className=' font-semibold text-xl py-6 italic text-slate-600'>you want to book for reservations? Get in touch</p>
              </div>
  <div className='flex justify-center items-center '>
      <form action="https://formspree.io/f/xnqepdqy" method='POST' className=' flex flex-col w-full md:w-1/2'>
          <input type="text" required name='name' placeholder='Name' className=' text-xl bg-transparent border-4 py-2 rounded-lg px-2 text-white focus:outline-none capitalize border-indigo-950 '/>
          <input type="text" required name='email' placeholder='Email address' className=' text-xl my-8 bg-transparent  text-white focus:outline-none capitalize border-4 py-2 rounded-lg px-2 border-indigo-950 '/>
          <textarea  name="message"  placeholder='Message' className=' py-9 text-xl bg-transparent text-white focus:outline-none capitalize border-4  resize-none border-indigo-950  rounded-lg px-2'></textarea>

          <button className=" text-white  bg-indigo-950  rounded-lg ring-2 border-4 ring-indigo-950 py-2 my-4 mx-auto flex text-xl font-semibold items-center hover:bg-transparent hover:text-indigo-950 hover:ring-4 px-7">Get in touch</button>
      </form>
  </div>
  <p className='text-gray-600 pb-10 tracking-widest text-center  text-xl'>&copy;Copyright-<span className='font-guerrilla'>EDDYDEV </span>{getCurrentYear()}  </p>
          </div>
    
    )
  }
  
  export default Contact