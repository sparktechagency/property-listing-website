/* eslint-disable @next/next/no-img-element */ 
"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Building2, Utensils, Building } from 'lucide-react';
import { Card, Typography } from 'antd';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const { Title, Paragraph } = Typography;

interface BusinessCardProps {
  image: string;
  title: string;
  icon: React.ReactNode;
  description: string;
} 
const businessData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      title: "Hospital",
      icon: <Building2 size={20} />,
      description: "Singapore General Hospital (SGH) is Singapore's largest and oldest hospital, providing comprehensive medical care, advanced treatments, and research."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Restaurant",
      icon: <Utensils size={20} />,
      description: "A restaurant offers a variety of delicious meals in a comfortable setting, providing an enjoyable dining experience for all."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Industrial Building",
      icon: <Building size={20} />,
      description: "An industrial building is designed for manufacturing, storage, or distribution, offering specialized spaces for equipment, production, and logistics."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1577979749830-f1d742b96791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      title: "Office Space",
      icon: <Building2 size={20} />,
      description: "Modern office spaces designed for productivity and collaboration, featuring flexible layouts and amenities for businesses of all sizes."
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Shopping Mall",
      icon: <Building size={20} />,
      description: "A comprehensive retail destination offering a wide range of stores, dining options, and entertainment facilities for visitors."
    }
  ]; 
const BusinessListing = () => { 

    const BusinessCard: React.FC<BusinessCardProps> = ({ image, title, icon, description }) => {
        return (
          <div 
            className=" "
        
          > 
           <div className="relative h-[455px] ">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-[455px] object-cover"
                />
              </div>  

              <div className='absolute -bottom-5 right-1 bg-white p-4 w-4/5 rounded-lg'> 
            <div className="flex items-center gap-2 mb-2">
              <span className="text-blue-600">{icon}</span>
              <Title level={5} className="m-0">{title}</Title>
            </div>
            <p className="text-gray-600 text-sm">
              {description}
            </p>

              </div>
          </div>
        );
      }; 

    return (
        <div className='container mx-auto pb-[60px]'>
            <p className="text-[48px] font-semibold mb-[36px] text-[#000000]">Business listing</p> 

            <div className="">

        
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
                prevEl: '.swiper-button-prev',  
                nextEl: '.swiper-button-next',  
            }}
            pagination={{ 
              clickable: true,
              el: '.swiper-pagination'
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="relative lg:px-4 px-2"
          >
            {businessData.map((business) => (
              <SwiperSlide key={business.id} className="h-auto">
                <BusinessCard
                  image={business.image}
                  title={business.title}
                  icon={business.icon}
                  description={business.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          
          <button className="swiper-button-prev   z-10  rounded-full bg-primary shadow-lg flex items-center justify-center  ">
                   <span>  <ChevronLeft className="" color='white' /> </span>
                </button>

                <button className="swiper-button-next  z-10  rounded-full bg-primary shadow-lg flex items-center justify-center  ">
                  <span>  <ChevronRight className="" color='white' /> </span> 
                </button>

      <div className="swiper-pagination flex justify-center gap-2 mt-6" />
        </div>

    </div> 

        </div>
    );
};

export default BusinessListing;