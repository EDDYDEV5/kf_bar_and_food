import React, { useState } from "react";
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6"
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "react-use-cart";
import kfbar from "../assets/imgs/kfbartransparent.png"

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { totalUniqueItems } = useCart();
  const links = [
    {
      id: 1,
      title: "home",
      link: '/',
    },
    {
      id: 2,
      title: "about",
      link: "/about",
    },
    {
      id: 3,
      title: "contact",
      link: "/contact",
    },
    
  ];

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
    <>
      <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-indigo-100 fixed z-10 ">
        <div className="bg-indigo-950 mt-2 rounded w-12">
          <Link to="/"><img src={kfbar} alt="" /></Link>
        </div>

        <ul className=" hidden md:flex">
          {links.map(({ id, link, title }) => (
            <li key={id} className="px-6 tracking-wide font-sansita hidden md:flex capitalize text-indigo-950 text-3xl font-bold  hover:scale-110 hover:text-indigo-600">
              <Link to={link}>
                {title}
              </Link>

            </li>
          ))}
        </ul>

        <div className="flex">
          <Link to="/cart">
            <div className="flex px-6 items-center text-xl text-indigo-950 font-semibold">
            Cart ({totalUniqueItems})
            <FaShoppingCart size={32} />
        
           
            </div>
          </Link>
        

        <div
          onClick={() => setNav(!nav)}
          className=" text-white rounded md:hidden flex flex-row"
        >
          {nav ? (
            <IoClose size={30} className="bg-indigo-950 rounded z-30 " />
          ) : (
            <FaBars size={30} className="bg-indigo-950 rounded px-1" />
          )}
        </div>
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center  top-0 right-0 w-full h-screen bg-indigo-950  text-white absolute">
    
            {links.map(({ id, link, title }) => (
              <li
                key={id}
                className="cursor-pointer capitalize font-tektur text-4xl m-5 hover:border-b-4 border-slate-500 "
              >
                
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                >
                  # {title}

                </Link>
                
              </li>
      
            ))}
            <ul className='flex  justify-center px-4 py-5  items-center  text-xl'>
  {socials.map(({id, icons}) => (
    <li key={id} className=' font-bold text-indi tracking-wide px-5 hover:scale-125 '>
    {icons}
    </li>
  ))}
  </ul>
          </ul>
        )}
        
      </div>
    </>
  );
};

export default Navbar;
