import React from "react";
import { useCart } from "react-use-cart";
import { motion } from "framer-motion"

const MenuItems = ({ items }) => {
  const { addItem } = useCart();

  return (
    <>
      <div className="flex bg-indigo-50 w-full  justify-center h-full   
      ">
          
        <div className="max-w-screen-lg mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-8 lg:h-full   px-4 py-4 items-center pt-20 ">
        
          {items.map((item) => (
            <motion.div
              key={item.id}
              className="flex items-center border-2 border-indigo-950 rounded-2xl shadow-sm shadow-gray-800 h-56"

              initial={{opacity: 0}}
  whileInView={{opacity: 1}}
  transition={{delay: 0.1}}
            >
              <img
                src={item.img}
                alt=""
                className="rounded-2xl py-2 px-2 h-56 w-44 md:w-52"
              />
              <div className="bg-inherit flex flex-col justify-center px-4 items-center rounded-b-2xl w-44 lg:w-52">
                <p className=" italic py-1 text-gray-400">{item.description}</p>
                <p className=" font-semibold text-gray-900 text-xl">
                  {item.caption}
                </p>
                <p className="py-2 font-semibold text-gray-900 ">₦{item.price}</p>
                <button
                  onClick={() => addItem(item)}
                  className=" text-white font-semibold bg-indigo-950 py-1 px-3 rounded-lg ring-2 border-4 ring-indigo-950 mb-4 hover:bg-transparent hover:text-indigo-950 hover:ring-4 "
                >
                  Add To Cart
                </button>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      
    </>
  );
};
export default MenuItems;
