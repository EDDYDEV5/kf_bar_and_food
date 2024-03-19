import React from "react";
import { useCart } from "react-use-cart";

const MenuItems = ({ items }) => {
  const { addItem } = useCart();

  return (
    <>
      <div className="flex bg-indigo-50 w-full h-full py-4">
        <div class="max-w-screen-lg mx-auto px-2 grid grid-cols-1 lg:grid-cols-2  gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              class="flex  border-2 border-indigo-950 rounded-2xl m-4 shadow-sm shadow-gray-800"
            >
              <img
                src={item.img}
                alt=""
                class="rounded-2xl py-2 px-2 h-52  w-52"
              />
              <div class="bg-inherit flex flex-col justify-center items-center py rounded-b-2xl w-44 lg:w-52">
                <p class=" italic py-1 text-gray-400">{item.description}</p>
                <p class=" font-semibold text-gray-900 text-xl">
                  {item.caption}
                </p>
                <p class="py-2 font-semibold text-gray-900 ">₦{item.price}</p>
                <button
                  onClick={() => addItem(item)}
                  className=" text-white font-semibold bg-indigo-950 py-1 px-3 rounded-lg ring-2 border-4 ring-indigo-950 mb-4 hover:bg-transparent hover:text-indigo-950 hover:ring-4 "
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default MenuItems;
