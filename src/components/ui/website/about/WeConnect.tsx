"use client";

import Image from 'next/image';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi'; 
const WeConnect = () => {
    return (
        <main className="">
        <div className="container mx-auto  py-[60px]">
        <div className="flex flex-col md:flex-row items-center lg:gap-[80px] gap-10 ">
      {/* Left side with image and blue background */}
      <div className=" w-full md:w-1/2 ">
          <Image
            src="/aboutSide.svg"
            alt="Handing over house keys"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
   

      {/* Right side with text content */}
      <div className="w-full md:w-1/2 space-y-6">
        <div className="space-y-4">
          <h2 className="lg:text-[35px] text-[28px] font-semibold">
            We <span className="text-[#0171E2]">Connect People</span> With Their Dreams
          </h2>
          <p className="text-[#757575] lg:text-[20px] text-[17px] font-normal">
            At our core, we connect people with their dreams by finding the perfect
            property that suits their needs. Whether it&apos;s a home or an investment, we make
            the journey seamless, turning aspirations into reality with trust and expertise.
          </p>
        </div>

        {/* Feature list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <HiOutlineChevronDoubleRight className="text-primary text-xl flex-shrink-0" />
            <span className="text-[#000000] font-medium">Dreams. Property. Reality.</span>
          </div>
          <div className="flex items-center gap-2">
            <HiOutlineChevronDoubleRight className="text-primary text-xl flex-shrink-0" />
            <span className="text-[#000000] font-medium">Explore. Discover. Settle.</span>
          </div>
          <div className="flex items-center gap-2">
            <HiOutlineChevronDoubleRight className="text-primary text-xl flex-shrink-0" />
            <span className="text-[#000000] font-medium">Find. Live. Love.</span>
          </div>
          <div className="flex items-center gap-2">
            <HiOutlineChevronDoubleRight className="text-primary text-xl flex-shrink-0" />
            <span className="text-[#000000] font-medium">Your Lifestyle, Our Mission</span>
          </div>
          <div className="flex items-center gap-2">
            <HiOutlineChevronDoubleRight className="text-primary text-xl flex-shrink-0" />
            <span className="text-[#000000] font-medium">Your Property, Our Mission</span>
          </div>
          <div className="flex items-center gap-2">
            <HiOutlineChevronDoubleRight className="text-primary text-xl flex-shrink-0" />
            <span className="text-[#000000] font-medium">Find It. Live It.</span>
          </div>
        </div>
      </div>
    </div>
        </div>
      </main>
    );
};

export default WeConnect;