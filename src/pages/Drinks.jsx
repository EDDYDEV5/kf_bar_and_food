import React, { useState } from "react";
import MenuList from "./MenuList";
import Data from "../data";
import MenuItems from "./Menuitems";



const Drinks = () => {
  const [items, setItems] = useState(Data)
  

  return (
    <div>
      
      <MenuList title="Drinks" />
  
      <>
      <MenuItems items={items.filter((item)=>item.type==='spirit')} />
       </>
     
  
     

    </div>
  );
};

export default Drinks;
