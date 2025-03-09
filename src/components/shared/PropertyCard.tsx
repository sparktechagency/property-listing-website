/* eslint-disable @next/next/no-img-element */
"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import { GrUserManager } from 'react-icons/gr';
import { IoLocationOutline } from 'react-icons/io5';
import { PiUsersThree } from 'react-icons/pi';
import { RiCalendarScheduleLine } from 'react-icons/ri';

type Property = {
    title: string;
    image: string;
    location: string;
    area: number;
    ownership: string;
    revenue: string;
    year: number; 
    id: number;
  }; 
const PropertyCard = ({ property }:{property:Property}) => { 
  const router = useRouter();
    return (
        <div key={property.id} className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer" onClick={() => router.push(`/business-listing/${property.id}`)}>
        <div className="relative">
          <img 
            src={property.image} 
            alt={property.title}
            className="w-full h-[250px] object-cover"
          />
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{property.title}</h3>
            <div className='flex items-center gap-1'> 
              <span> <IoLocationOutline size={18} color='#757575' /> </span>  
            <p className="text-sm text-[#757575]">{property.location}</p> 
                </div> 
            </div>
            <div className="text-right">
              <p className="text-[12px] font-bold text-[#348DE8]">Revenue: {property.revenue}</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between  py-4 ">
          
              <div className='flex items-center gap-2'> 
                <p><PiUsersThree size={24} color='#757575' /> </p>
                <p className="text-[16px] font-semibold text-gray-900">{property.area}</p>
              </div>
              <div className='flex items-center gap-2'> 
                <p> <GrUserManager size={20} color='#757575' /> </p>
                <p className="text-[16px] font-semibold text-gray-900">{property.ownership}</p>
              </div>
            
            <div className='flex items-center gap-2'> 
                <p> <RiCalendarScheduleLine size={20} color='#757575' /> </p>
              <p className="text-[16px] font-semibold text-gray-900">{property.year}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PropertyCard;