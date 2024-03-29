import React from 'react';
import './Slider.css';
import SliderItem from './SliderItem';

const Slider = () => {
    return (
        <div className='container mx-auto bg-slate-100 rounded-md'>
            <div className='flex justify-between flex-col md:flex-row lg:flex-row xl:flex-row bg-slate-100 px-2 pt-2'>
                <div className="carousel rounded-lg  sm:w-ful h-60l">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className='carousel-img'>
                            <img src="assets/p2.jpg" className="w-full object-contain" alt="pic1" />
                        </div>
                        <SliderItem></SliderItem>
                        <div className="hidden sm:hidden md:block lg:block xl:block text-center absolute  transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className='carousel-img' >
                            <img src="assets/p3.jpg" className="w-full object-contain" alt="pic2"/>
                        </div>
                        <SliderItem></SliderItem>
                        <div className="hidden sm:hidden md:block lg:block xl:block text-center absolute transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className='carousel-img'>
                            <img src="assets/p1.jpg" className="w-full" alt="pic3" />
                        </div>
                        <SliderItem></SliderItem>
                        <div className="hidden sm:hidden md:block lg:block xl:block text-center absolute transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className='carousel-img'>
                            <img src="assets/p1.jpg" className="w-full"  alt="pic4"/>
                        </div>
                        <SliderItem></SliderItem>
                        <div className="hidden sm:hidden md:block lg:block xl:block text-center absolute transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;