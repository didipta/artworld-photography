import React from 'react';
import img1 from "../img/img12.jpg"
import img2 from "../img/img11.jpg"
import img3 from "../img/img10.jpg"
import img4 from "../img/img13.jpg"
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full text-slate-100 font-bold  text-center">
  <div id="slide1" className="carousel-item relative w-full h-2/6">
    <img src={img1} className="w-full" alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute flex flex-col justify-between transform -translate-y-1/2  -translate-x-1/2 left-1/2 bottom-0 z-20">
      <h1 className="lg:text-4xl md:text-3xl sm:text-2xl">Wonderful Photography</h1>
      <p className="text-sm mt-3 w-80 lg:w-full">Wedding photography is one of the most challenging yet fulfilling genres of photography, one that will challenge your people skills, technical abilities, and physical stamina.</p>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full h-2/6">
    <img src={img2} className="w-full" alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute flex flex-col justify-between transform -translate-y-1/2  -translate-x-1/2 left-1/2 bottom-0 z-20">
      <h1 className="lg:text-4xl md:text-3xl sm:text-2xl">Wonderful Photography</h1>
      <p className="text-sm mt-3 lg:w-full w-80">Wedding photography is one of the most challenging yet fulfilling genres of photography, one that will challenge your people skills, technical abilities, and physical stamina.</p>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full h-2/6">
    <img src={img3} className="w-full" alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute flex flex-col justify-between transform -translate-y-1/2  -translate-x-1/2 left-1/2 bottom-0 z-20">
      <h1 className="lg:text-4xl md:text-3xl sm:text-2xl">Wonderful Photography</h1>
      <p className="text-sm mt-3 w-80 lg:w-full">Wedding photography is one of the most challenging yet fulfilling genres of photography, one that will challenge your people skills, technical abilities, and physical stamina.</p>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full h-2/6">
    <img src={img4} className="w-full" alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute flex flex-col justify-between transform -translate-y-1/2  -translate-x-1/2 left-1/2 bottom-0 z-20">
      <h1 className="lg:text-4xl md:text-3xl sm:text-2xl">Wonderful Photography</h1>
      <p className="text-sm mt-3 w-80 lg:w-full">Wedding photography is one of the most challenging yet fulfilling genres of photography, one that will challenge your people skills, technical abilities, and physical stamina.</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;