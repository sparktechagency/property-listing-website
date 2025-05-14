/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client"
import PropertyCard from '@/components/shared/PropertyCard';
import { useGetAllBusinessListQuery } from '@/redux/features/businessListApi';

const BusinessListing = () => {  

  const {data:lists} = useGetAllBusinessListQuery({}) 

  return (
    <div className="container lg:my-[60px] my-[35px] ">

      <p className="text-[28px] md:text-[48px] font-semibold  lg:mb-9 mb-4 ">
        Business listing
      </p>

      <div className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lists?.business?.slice(0, 6)?.map((property: any) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessListing;