import React from "react";
import MenuList from "../pages/MenuList";
import Pagination from "../pages/Pagination";


const Menu = () => {
  
 return (
    <>
      <div>
        <div class=" ">
          <MenuList title="MENU" />
         
        </div>
        <>
        
        <Pagination itemsPerPage={6} />
        </>
      </div>
    </>
  );
};

export default Menu;
