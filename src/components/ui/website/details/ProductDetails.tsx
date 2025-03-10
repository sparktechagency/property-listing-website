/* eslint-disable @next/next/no-img-element */
"use client";

import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { PiUsers } from "react-icons/pi";
import { RiCalendarScheduleLine, RiMoneyDollarCircleLine } from "react-icons/ri";
import { Montserrat } from "next/font/google";
import { GrLocation } from "react-icons/gr";
import { useState } from "react";
import EnquireNowModal from "./EnquireNowModal";
import { useRouter } from "next/navigation";

const montserrat = Montserrat({ subsets: ["latin"] });

const overview = [
    {
        id: 1,
        title: "Business type ",
        icon: <LuBriefcaseBusiness size={24} color="#757575" />,
        value: "Houses"
    },
    {
        id: 2,
        title: "Employees",
        icon: <PiUsers size={24} color="#757575" />,
        value: "220"
    },
    {
        id: 3,
        title: "Inception",
        icon: <RiCalendarScheduleLine size={24} color="#757575" />,
        value: "1978"
    },
    {
        id: 4,
        title: "Headquarters",
        icon: <HiOutlineBuildingOffice2 size={24} color="#757575" />,
        value: "Singapore"
    },
    {
        id: 5,
        title: "Ownership Type",
        icon: <PiUsers size={24} color="#757575" />,
        value: "Sole"
    },
    {
        id: 6,
        title: "Funding",
        icon: <RiMoneyDollarCircleLine size={24} color="#757575" />,
        value: "$40k"
    },
]

const propertyImages = [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
];
const ProductDetails = () => { 
    const [ open , setOpen]  = useState(false) 
    const router = useRouter()
    return (
        <div className='container lg:py-[60px] py-[30px]'>
            <div className=''>
                <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center mb-6">
                    <div>
                        <p className="lg:text-[32px] text-[24px] text-primary font-semibold lg:mb-0 mb-2 ">Equestrian Family House</p>
                        <p className="text-gray-500 text-[14px] lg:mb-0 mb-2 flex items-center gap-1"> <span> <GrLocation size={16} />  </span> <span> Singapore City </span></p>
                    </div>
                    <div className="flex flex-col  gap-y-2">
                        <div className="block font-semibold lg:text-[32px] text-[20px] text-[#0171E2]">Revenue: $38,440</div> 
                        <div className=" lg:block hidden"> 
                        <div className=" flex items-center lg:justify-end gap-4 ">
                            <button className=" bg-primary text-white font-bold h-[40px]  px-5 rounded-lg text-[16px]  " onClick={() => router.push("/checkout")} > Buy </button>
                            <button className=" bg-[#FFF7EC] text-primary font-bold h-[40px]  px-5 rounded-lg text-[16px]  " onClick={() => setOpen(true)}> Enquire Now </button>
                        </div>

                        </div>

                    </div>
                </div>

                <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 mb-8  ">
                    <div className="col-span-2">
                        <img alt="Main Property Image" src={propertyImages[0]} className="h-auto w-full object-cover shadow-lg rounded-lg" />
                    </div>
                    <div className="col-span-2 ">
                        <div className="grid grid-cols-2 gap-x-4 lg:gap-y-0 gap-y-2">
                            {propertyImages.slice(1).map((image, index) => (
                                <img key={index} alt={`Property Image ${index + 2}`} src={image} className="h-auto w-full object-cover shadow-md rounded-lg" />
                            ))}

                        </div>
                    </div>
                </div>


                <div className="flex items-center justify-center mb-[30px]   ">
                    <div className="w-[90%] bg-[#F8F8F8] lg:px-[77px] px-4 lg:py-10 py-4 rounded-xl">
                        <p className="text-[32px] font-semibold mb-6">Overview</p>
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mb-8 text-center">
                            {
                                overview?.map((item, index) => (
                                    <div key={index} className="p-4  flex items-center justify-center gap-x-5 border border-gray-300 rounded-lg">
                                        <p className="flex items-center  justify-center bg-white w-12 h-12 rounded-full"> {item.icon}  </p>

                                        <div className=" flex items-start flex-col">
                                            <p className="font-medium text-[#757575] text-[16px] ">{item.title}</p>
                                            <p className="text-[#000000] text-[20px] font-semibold">{item.value}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>

                </div>

                <div>
                    <p className="lg:text-[32px] text-[24px] font-semibold mb-3 text-[#000000] ">Business Description</p>
                    <p className={`${montserrat.className} lg:text-lg text-sm font-normal pb-3 text-[#000000] `}>
                        This 5-bed with a loft, 4-bath home in the gated community of The Hideout has it all. From the open floor plan to the abundance of light from the windows, this home is perfect for entertaining. The living room and dining room have vaulted ceilings and a beautiful fireplace. You will love spending time on the deck taking in the beautiful views. In the kitchen, you&apos;ll find stainless steel appliances and a tile backsplash, as well as a breakfast bar.
                    </p>

                    <p className={`${montserrat.className} lg:text-lg text-sm font-normal pb-7 text-[#000000] `}>
                        Placeholder content for this accordion, which is intended to demonstrate the class. This is the first item&apos;s accordion body you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-16 gap-8 mb-8">

                    <div className="w-full col-span-2">
                        <p className="lg:text-[32px] text-[24px] font-semibold mb-3 text-[#000000]">Business Details</p>
                        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-8 ">

                            <div className="flex flex-col gap-10 gap-y-2  w-full">
                                <div className="flex items-center justify-between gap-10 "><p className="text-gray-500 font-medium">Business ID : </p>  <p className="font-semibold">RT48</p></div>
                                <div className="flex items-center justify-between "><p className="text-gray-500 font-medium">Revenue :</p><p className="font-semibold">$17340</p></div>
                                <div className="flex items-center justify-between "><p className="text-gray-500 font-medium">Total employees :</p><p className="font-semibold">220</p></div>
                            </div>

                            <div className="flex flex-col gap-y-2  w-full">
                                <div className="flex items-center justify-between "><p className="text-gray-500 font-medium">Inception :</p><p className="font-semibold">1978</p></div>

                                <div className="flex items-center justify-between "><p className="text-gray-500 font-medium">Business Type :</p><p className="font-semibold">Houses</p></div>

                                <div className="flex items-center justify-between "><p className="text-gray-500 font-medium">Ownership Type :</p><p className="font-semibold">Sole</p></div>
                            </div>


                        </div>
                    </div>

                    <div className="col-span-1">
                        <p className="lg:text-[32px] text-[24px] font-semibold mb-3 text-[#000000]">Address</p>
                        <div className=" ">

                            <div className="flex flex-col gap-10 gap-y-2  w-full">
                                <div className="flex items-center justify-between gap-10 "><p className="text-gray-500 font-medium">Address : </p>  <p className="font-semibold">SIA Building 77</p></div>
                                <div className="flex items-center justify-between "><p className="text-gray-500 font-medium">City :</p><p className="font-semibold">Woodlands</p></div>
                                <div className="flex items-center justify-between "><p className="text-gray-500 font-medium">State/County :</p><p className="font-semibold">Singapore City</p></div>
                            </div>
                        </div>

                    </div>
                </div>  

                <div> 
                    <p className="lg:text-[32px] text-[24px] font-semibold mb-3 text-[#000000]">Video</p> 

                    <div className="relative w-full lg:h-[500px] h-[400px] overflow-hidden"> 
                    <video 
            className="absolute top-0 left-0 w-full lg:h-[500px] h-[400px] object-cover rounded-lg"
            autoPlay 
            loop 
            muted 
            playsInline
        >
            <source src="https://media-hosting.imagekit.io//3b7d018d37354f33/3773486-hd_1920_1080_30fps.mp4?Expires=1836192387&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=mkFVj02CBa2cOPrgndzUzCszraauYy3-FV15MLkOFsrFuqGxrxelL1NblXVdb~KA1utJ-QDjxpdNPkPdoyldtbo~aRZeuN6k~-nlUyDtX6wRT7ykmlzGtqZ1MghlYuAZTkPmmDXwMiH9sCLVofNx0c3WE~S2E3SBOS16esVrdeNJEtCEAU~gKT7Htr8HNfOoK12hMx4GtF6QdvMS1hfGshhYxV~U14IuCw3ecRRkddaOp2JBpVH76r3BBN39Icajn1D5s2K-PhCPheAcfqU0s2nk-CZjKWX95XwmeGBmwQ1aAPhuzTzKKmNps56cMroxoDRFv6lwwulXjItZUyRc5Q__" type="video/mp4" />
            Your browser does not support the video tag.
        </video>

                    </div>
                </div> 

                <div className=" block lg:hidden mt-5"> 
                        <div className=" flex items-center justify-end gap-4 ">
                            <button className=" bg-primary text-white font-bold h-[40px]  px-5 rounded-lg text-[16px]  " onClick={() => router.push("/checkout")} > Buy </button>
                            <button className=" bg-[#FFF7EC] text-primary font-bold h-[40px]  px-5 rounded-lg text-[16px]  " onClick={() => setOpen(true)}> Enquire Now </button>
                        </div>

                        </div>
            </div> 
            <EnquireNowModal open={open} setOpen={setOpen} />
        </div>
    );
};

export default ProductDetails;