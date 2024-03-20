import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Smilling from "../assets/imgs/smilling.png";
import Together from "../assets/imgs/together.png";
import People from "../assets/imgs/people.png";
import Men from "../assets/imgs/men.png";
import Girl from "../assets/imgs/girl.png";

const Slider = () => {
  const settings = {
    arrows: false,
    duration: 2000,
  };
  const slideimages = [
    {
      id: 1,
      src: Men,
    },
    {
      id: 2,
      src: Smilling,
    },
    {
      id: 3,
      src: People,
    },
    {
      id: 4,
      src: Girl,
    },
    {
      id: 5,
      src: Together,
    },
  ];

  return (
    <>
      <div className=" md:pb-10 w-full h-full bg-indigo-100 pt-24">
        
      
      
        <Slide {...settings}>
          {slideimages.map(({ id, src }) => (
            <div
              key={id}
              className="flex justify-center items-center h-44 md:h-80 md:bg-contain  bg-cover  z-0 relative"
            >
              <h1 className="text-5xl  tracking-wide uppercase font-sansita py-5  z-10 text-white absolute top-2 md:top-20 "> k_f <br/> food & <span className="text-red-700">bar</span>
  </h1>
  
     <p className="text-xl font-sansita tracking-wider py-2 capitalize text-white z-10 absolute top-28 md:top-52 
    ">we Fulfill your comfort and food cravings.</p>
              <img src={src} alt="" className="mt-20   contrast-[70%]" />
            </div>
          ))}
        </Slide>
        </div>
      
    </>
  );
};

export default Slider;
