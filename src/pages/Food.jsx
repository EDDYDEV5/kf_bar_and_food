import React, { useState } from 'react'
import MenuList from './MenuList'
import Data from '../data'
import MenuItems from './Menuitems'



const Food = () => {
  const [items] = useState(Data)
  return (
 <div>
 <MenuList title="Foods" />
  <MenuItems items={items.filter((item)=>item.type==='food')} />
 </div>
  )
}

export default Food