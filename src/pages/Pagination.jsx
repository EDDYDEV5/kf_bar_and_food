import React, { useState, useEffect } from "react";
import MenuItems from "../pages/Menuitems";
import Data from "../data";
import ReactPaginate from "react-paginate";
import  '../paginate.css'





const Pagination = ({ itemsPerPage }) => {
    
  const [items, setItems] = useState(Data)

const [currentPage, setCurrentPage] = useState(1);

const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 1000)
    }, [])
    if (loading) {
        return <h1 className=" text-4xl font-sansita pt-20 text-indigo-950 h-screen bg-indigo-50">loading....</h1>
    }


const indexOfLastPost = currentPage * itemsPerPage;
const indexOfFirstPost = indexOfLastPost - itemsPerPage;
const currentPost = items.slice(indexOfFirstPost, indexOfLastPost)



  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
 };


  return (
<div className=" bg-indigo-50">

<>     <MenuItems items={currentPost} />
        <ReactPaginate className="flex justify-center"
        onPageChange={paginate}
        pageCount={Math.ceil(items.length  / itemsPerPage)}
        previousLabel={'<<'}
        nextLabel={'>>'}
        containerClassName={'pagination'}
        pageLinkClassName={'page-number'}
        previousLinkClassName={'page-number'}
        nextLinkClassName={'page-number'}
        activeLinkClassName={'active'} /></>
</div>
  ) ;
};

export default Pagination;
