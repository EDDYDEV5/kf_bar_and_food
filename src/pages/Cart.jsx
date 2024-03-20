import React from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import Emptycart from "../assets/imgs/emptycart.png";

const Cart = () => {
  const {
    isEmpty,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart,
  } = useCart();

  if (isEmpty)
    return (
      <div className=" h-screen flex flex-col items-center justify-center text-indigo-950 bg-indigo-100">
        <p className=" text-4xl text-indigo-950 font-sansita py-6">
          Your cart is empty...
        </p>
        <img src={Emptycart} alt="" width={200} />
        <button className=" mt-9 text-white font-semibold bg-indigo-950 py-1 px-3 rounded-lg ring-2 border-4 ring-indigo-950 hover:bg-transparent hover:text-indigo-950 hover:ring-4 mb-4">
          <Link to="/">Continue Shopping</Link>
        </button>
      </div>
    );

  return (
    <>

      <div className=" items-center justify-center h-full   bg-indigo-100 ">
      
      <div className=" md:h-full flex flex-col justify-center items-center   pt-10">
      <h1 className=" text-3xl font-sansita text-gray-600 tracking-wide py-9">Your Cart Item</h1>
            {items.map((item) => (
              <div
                key={item.id}
                className=" flex border-2 border-indigo-950 rounded-2xl mb-4 shadow-sm shadow-gray-800 h-64"
              >
              
                  <img
                    src={item.img}
                    alt=""
                    className="rounded-2xl py-2 px-2  w-44 md:w-52"
                  />
                
                <div className=" px-4">
                  <p className=" italic py-1 text-gray-400">
                    {item.description} 
                  </p>
                  <p className=" font-semibold text-gray-900   text-xl">
                    {item.caption}
                  </p>
                  <p className="py-1 font-semibold text-gray-900">₦{item.price}</p>
                  <p class="font-semibold text-gray-600 pb-2">Quantity: {item.quantity}</p>
                  
                <button 
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className=" text-white h-6 w-6 bg-lime-600 mr-4 rounded"
                >
                  -
                </button>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className=" text-white h-6 w-6 bg-lime-600 rounded "
                >
                  +
                </button>
                <div>
                <button onClick={() => removeItem(item.id)}  className="text-white font-semibold bg-red-700 py-1 md:px-2 mt-4  rounded-lg ring-2 border-4 px-1 ring-red-700 hover:bg-transparent hover:text-indigo-950 hover:ring-4">Remove Item</button>
                </div>
              </div>
              </div>
              
            ))}
         
        
         <div className="flex items-center justify-center py-6">
            <p className=" text-xl font-semibold px-5">
              Total Price: ₦{cartTotal}
            </p>
            <button
              
              className="text-white font-semibold bg-lime-700 py-1 px-2 rounded-lg ring-2 border-4 ring-lime-700 hover:bg-transparent hover:text-indigo-950 hover:ring-4 md:px-7 "
            >
               <Link to="/checkout">Checkout</Link>
            </button>
            </div>
            <div className="flex items-center justify-center py-6 mb-10">
          <button className=" mt-9  text-white font-semibold bg-indigo-950 py-1 px-1 md:px-3 rounded-lg ring-2 border-4 ring-indigo-950 mb-10 mr-9 hover:bg-transparent hover:text-indigo-950 hover:ring-4 ">
            <Link to="/">Continue Shopping</Link>
          </button>
          <button onClick={() => emptyCart()} className=" text-white font-semibold bg-indigo-950 py-1 rounded-lg ring-2 border-4 ring-indigo-950 hover:bg-transparent hover:text-indigo-950 hover:ring-4 px-2 ">
            Clear Cart
          </button>
          </div>
          </div>
          </div>
         
      
    
    </>
  );
};

export default Cart;
