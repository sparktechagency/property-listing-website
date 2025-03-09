/* eslint-disable @next/next/no-img-element */
"use client"
import PropertyCard from '@/components/shared/PropertyCard';
import React from 'react';


const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    title: "Equestrian  House",
    location: "Singapore City",
    revenue: "$38,440",
    area: 420,
    ownership: "Sole proprietorship",
    year: 1978
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?q=80&w=2069&auto=format&fit=crop",
    title: "Singapore  Hospital",
    location: "Singapore City",
    revenue: "$38,440",
    area: 480,
    ownership: "Partnership",
    year: 1974
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop",
    title: "Apartments",
    location: "Singapore City",
    revenue: "$38,440",
    area: 420,
    ownership: "Sole proprietorship",
    year: 1978
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    title: "Equestrian Family ",
    location: "Singapore City",
    revenue: "$23,040",
    area: 420,
    ownership: "Sole proprietorship",
    year: 1978
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    title: "Corporate Office ",
    location: "Singapore City",
    revenue: "$22,014",
    area: 870,
    ownership: "Sole proprietorship",
    year: 1988
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
    title: "Brew & Bliss Café",
    location: "Singapore City",
    revenue: "$13,410",
    area: 420,
    ownership: "Sole proprietorship",
    year: 1978
  }
];

const BusinessListing = () => {



  return (
    <div className="container my-[60px] ">

      <p className="text-4xl md:text-[48px] font-semibold  mb-9 ">
        Business listing
      </p>

      <div className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessListing;