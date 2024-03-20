import React from "react";
import MenuList from "../pages/MenuList";
import Pagination from "../pages/Pagination";


const Menu = () => {
  
 return (
    <>
      <div>
        <div>
          <MenuList title="MENU" />
        </div>
        <Pagination itemsPerPage={8} />
      </div>
    </>
  );
};

export default Menu;
