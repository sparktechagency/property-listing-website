"use client"

import { Star } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Slider, { Settings } from 'react-slick';
const CustomerReview = () => { 
    const [activeIndex, setActiveIndex] = useState(0); 

    const reviews = [
        {
            id: 1, 
            name: 'Leon Fischer',
            review: ' Working with Realty was a dream come true! We found our perfect home faster than we expected, and the process was smooth from start to finish.', 
            image: '/user2.jpg'  ,
            rating:5 
        } , 
        {
            id: 2, 
            name: 'Asadujjaman Mahfuj',
            review: '  Working with Realty was a dream come true! We found our perfect home faster than we expected, and the process was smooth from start to finish.', 
            image: '/user2.jpg'  ,
            rating:4 
        } , 
        {
            id: 3, 
            name: 'John Doe',
            review: ' Working with Realty was a dream come true! We found our perfect home faster than we expected, and the process was smooth from start to finish.', 
            image: '/user2.jpg'  ,
            rating:5 
        } , 

    ] 

    const settings: Settings = {
        infinite: true,
        speed: 500,
        initialSlide: 0,
        arrows: false,  
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        autoplaySpeed: 3000,   
        beforeChange: (current, next) => setActiveIndex(next),
    customPaging: (i) => (
      <div
        style={{
          width: i === activeIndex ? "12px" : "10px" ,
          height: i === activeIndex ? "12px" : "10px",
          borderRadius: "100%",
          backgroundColor: i === activeIndex ? "#000000" : "#D3D3D3",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          marginTop: "20px"
        }}
      />
    ),
        appendDots: (dots) => (
            <div
              style={{
          
                padding: "1px",
             
              }} 
              className='flex items-center justify-center'
            >
              {dots}
            </div>
          ),
      };  
    return (
        <div className='pb-[60px]'>
        <section className="container w-full">
    <div className="flex lg:flex-row flex-col-reverse  items-center w-full lg:gap-[73px] gap-[20px]">
      <div className="space-y-6 lg:w-1/2 w-full">
        <div className="space-y-2">
        
          <div  className={` text-[#000000]  font-[600] lg:text-[48px] text-[28px] `} >
          Customer Reviews
</div>  
     <p className=' text-[#757575] font-normal lg:text-[20px] text-[16px]'> There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form by injected humour or randomised. </p>
        </div>  

        <Slider {...settings}> 

        {
          reviews.map((review) => (
              <div key={review.id} className="border border-gray-100 shadow rounded-2xl p-[25px] space-y-4 w-[485px]">
              <div className="text-gray-700 tracking-wider ">
              <RiDoubleQuotesL size={20} color="#ED6923" className="" />
      <div>
        <p className='ps-5'> 
           
          Love the convenience of Tweet! Fast, reliable, and super easy to use for
          all your food delivery  <span className='flex'> cravings. <sub>  <RiDoubleQuotesR size={20} color="#ED6923" className="" /> </sub>   </span>
        </p>
      </div>
      
    </div>
                
                <div className="flex items-center gap-3">
                  <Image
                    src={review.image}
                    alt="Customer avatar"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <p className="text-sm text-gray-600">Satisfied Customer</p>
                  </div>
                  <div className="ml-auto flex bg-primary p-1 gap-0.5">
                    {Array(review.rating).fill(null).map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        className="fill-[#ffffff] text-[#ffffff] "
                      />
                    ))}
                  </div>
                </div>
              </div>
          ))
        }
        </Slider>
    
        
     
      </div>
      
      <div className='lg:w-1/2 w-full flex items-center justify-center'> 
<Image src="/customer.svg" alt='' height={522} width={638} className=' h-auto w-auto object-cover ' /> 
      </div> 

    </div>
  </section>   
      </div>
    );
};

export default CustomerReview;