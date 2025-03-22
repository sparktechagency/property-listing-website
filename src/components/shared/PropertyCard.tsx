/* eslint-disable @next/next/no-img-element */
"use client"
import { imageUrl } from '@/redux/base/baseApi';
import moment from 'moment';
import { useRouter } from 'next/navigation';
import React from 'react';
import { GrUserManager } from 'react-icons/gr';
import { IoLocationOutline } from 'react-icons/io5';
import { PiUsersThree } from 'react-icons/pi';
import { RiCalendarScheduleLine } from 'react-icons/ri';

type Property = {
    name: string;
    image: string;
    location: string;
    employees: number;
    ownership: string;
    revenue: string;
    createdAt: string; 
    _id: number; 
  }; 
const PropertyCard = ({ property }:{property:Property}) => {  
  console.log("property", property);
  const router = useRouter();
    return (
        <div key={property?._id} className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer" onClick={() => router.push(`/business-listing/${property?._id}`)}>
        <div className="relative">
          <img 
            src={property?.image[0]?.startsWith("https") ? property?.image[0] : `${imageUrl}${property?.image[0]}`} 
            alt={property?.name}            
            className="w-full h-[250px] object-cover"
          />
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{property?.name}</h3>
            <div className='flex items-center gap-1'> 
              <span> <IoLocationOutline size={18} color='#757575' /> </span>  
            <p className="text-sm text-[#757575]">{property.location}</p> 
                </div> 
            </div>
            <div className="text-right">
              <p className="text-[12px] font-bold text-[#348DE8]">Price: {property?.revenue}</p>
            </div>
          </div>
          
          <div className="flex lg:flex-row flex-wrap items-center justify-between  py-4 ">
          
              <div className='flex items-center gap-2'> 
                <p><PiUsersThree size={24} color='#757575' /> </p>
                <p className="text-[16px] font-semibold text-gray-900">{property?.employees}</p>
              </div>
              <div className='flex items-center gap-2'> 
                <p> <GrUserManager size={20} color='#757575' /> </p>
                <p className="text-[16px] font-semibold text-gray-900">{property?.ownership}</p>
              </div>
            
            <div className='flex items-center gap-2'> 
                <p> <RiCalendarScheduleLine size={20} color='#757575' /> </p>
              <p className="text-[16px] font-semibold text-gray-900"> {moment(property?.createdAt).format('D-MM-YY')}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PropertyCard;