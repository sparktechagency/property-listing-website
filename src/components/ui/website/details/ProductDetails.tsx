/* eslint-disable @next/next/no-img-element */
"use client";

import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { PiUsers } from "react-icons/pi";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { Montserrat } from "next/font/google";
import { GrLocation } from "react-icons/gr";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useGetBusinessByIdQuery } from "@/redux/features/businessListApi";
import { useGetCategoryQuery } from "@/redux/features/categoryApi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useProfileQuery } from "@/redux/features/auth/authApi";
import ProposalModal from "./ProposalModal";
import { useCreateInitialChatMutation } from "@/redux/features/chatApi";
import { imageUrl } from "@/redux/base/baseApi";
import { Carousel } from "antd";

const montserrat = Montserrat({ subsets: ["latin"] });


const ProductDetails = () => {

    const { id } = useParams()
    const { data: detailsData } = useGetBusinessByIdQuery(id)
    const { data: category } = useGetCategoryQuery(undefined)
    const { data: profile } = useProfileQuery(undefined)
    const [createInitialChat] = useCreateInitialChatMutation()
    const [openProposal, setOpenProposal] = useState(false)
    const userRole = profile?.role
    const router = useRouter()  

    const matchedCategory = category?.find(
        (cat: { _id: string }) => cat?._id === detailsData?.category
    );

    const overview = [
        {
            id: 1,
            title: "Business type ",
            icon: <LuBriefcaseBusiness size={24} color="#757575" />,
            value: matchedCategory?.name
        },
        {
            id: 2,
            title: "Employees",
            icon: <PiUsers size={24} color="#757575" />,
            value: detailsData?.employees
        },
        {
            id: 3,
            title: "Inception",
            icon: <RiCalendarScheduleLine size={24} color="#757575" />,
            value: detailsData?.founded
        },
    ]


    const handelChat = async () => { 

        if(profile?._id){
            await createInitialChat(detailsData?.seller).then((res) => {
                if (res?.data?.success) {
                    router.push("/edit-profile?tab=7")
                }
            })
        }else{
            router.push("/login")
        }


    };
    return (
        <div className='container lg:py-[60px] py-[30px]'>
            <div className=''>
                <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center mb-6">
                    <div>
                        <p className="lg:text-[32px] text-[24px] text-primary font-semibold lg:mb-0 mb-2 ">{detailsData?.name}</p>
                        <p className="text-gray-500 text-[14px] lg:mb-0 mb-2 flex items-center gap-1"> <span> <GrLocation size={16} />  </span> <span> {detailsData?.location} </span></p>
                    </div>
                    <div className="flex flex-col  gap-y-2">
                        <div className="flex items-center justify-end lg:gap-8 gap-4">
                            <div className="block font-semibold lg:text-[32px] text-[20px] text-[#0171E2]">Price: ${detailsData?.price}</div>
                        </div>

                        <div className=" flex items-center lg:justify-end gap-4 ">
                            <button className=" bg-primary text-white font-bold h-[40px]  px-5 rounded-lg text-[16px] disabled:bg-[#ffab3e]/60  disabled:cursor-not-allowed  " onClick={() => setOpenProposal(true)} disabled={userRole === "SELLER"}  > Send Proposal </button> 
                          
                            <button className=" bg-[#FFF7EC] text-primary font-bold h-[40px]  px-5 rounded-lg text-[16px] disabled:text-[#ffab3e]/60   disabled:cursor-not-allowed " onClick={handelChat} disabled={userRole === "SELLER"} > Send Message </button>
                        </div>




                    </div>
                </div>

                <div className="w-[90%] mx-auto pb-10 ">

                    <Carousel autoplay autoplaySpeed={5000} >
                        {detailsData?.image?.map((image: string, index: number) => (
                            <div key={index} className=" bg-[#F8F8F8] rounded-md ">
                                <img alt={`Property Image ${index + 2}`} src={image?.startsWith("https") ? image : `${imageUrl}${image}`} className="h-[480px] w-full object-contain shadow-md rounded-lg" />
                            </div>
                        ))}

                    </Carousel>
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

                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mb-8 text-center">
                            <div className="p-4  col-span-2 flex items-center justify-center gap-x-5 border border-gray-300 rounded-lg">
                                <p className="flex items-center  justify-center bg-white w-12 h-12 rounded-full"> <HiOutlineBuildingOffice2 size={24} color="#757575" />  </p>

                                <div className=" flex items-start flex-col">
                                    <p className="font-medium text-[#757575] text-[16px] ">Headquarters</p>
                                    <p className="text-[#000000] text-[17px] font-semibold"> {detailsData?.location}</p>
                                </div>
                            </div>

                            <div className="p-4  col-span-1 flex items-center justify-center gap-x-5 border border-gray-300 rounded-lg">
                                <p className="flex items-center  justify-center bg-white w-12 h-12 rounded-full"> <PiUsers size={24} color="#757575" />  </p>

                                <div className=" flex items-start flex-col">
                                    <p className="font-medium text-[#757575] text-[16px] ">Ownership Type</p>
                                    <p className="text-[#000000] text-[17px] font-semibold">{detailsData?.ownership}</p>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

                <div>
                    <p className="lg:text-[32px] text-[24px] font-semibold mb-3 text-[#000000] ">Business Description</p>
                    <p className={`${montserrat.className} lg:text-lg text-sm font-normal pb-3 text-[#000000] `}>
                        {detailsData?.description
                        }
                    </p>

                </div>

                <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-16 gap-8 mb-8">

                    <div className="w-full col-span-2">
                        <p className="lg:text-[32px] text-[24px] font-semibold mb-3 text-[#000000]">Business Details</p>
                        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-8 ">

                            <div className="flex flex-col gap-10 gap-y-2  w-full">
                                <div className="flex items-center justify-between gap-10 "><p className="text-gray-500 font-medium">Business ID : </p>  <p className="font-semibold">RT48</p></div>
                                <div className="flex items-center justify-between "><p className="text-gray-500 font-medium">Price :</p><p className="font-semibold">${detailsData?.price
                                }</p></div>
                                <div className="flex items-center justify-between "><p className="text-gray-500 font-medium">Total employees :</p><p className="font-semibold">{detailsData?.employees}</p></div>
                            </div>

                            <div className="flex flex-col gap-y-2  w-full">
                                <div className="flex items-center justify-between "><p className="text-gray-500 font-medium">Inception :</p><p className="font-semibold">{detailsData?.founded}</p></div>

                                <div className="flex items-center justify-between "><p className="text-gray-500 font-medium">Business Type :</p><p className="font-semibold"> {matchedCategory?.name}</p></div>

                                <div className="flex items-center justify-between "><p className="text-gray-500 font-medium">Ownership Type :</p><p className="font-semibold">{detailsData?.ownership}</p></div>
                            </div>


                        </div>
                    </div>

                    <div className="col-span-1">
                        <p className="lg:text-[32px] text-[24px] font-semibold mb-3 text-[#000000]">Address</p>
                        <div className=" ">

                            <div className="flex flex-col gap-10 gap-y-2  w-full">
                                <div className="flex items-center justify-between"><p className="text-gray-500 font-medium">Address : </p>  <p className="font-semibold text-xs text-end">{detailsData?.location}</p></div>
                                <div className="flex items-center justify-between "><p className="text-gray-500 font-medium">City :</p><p className="font-semibold">{detailsData?.city}</p></div>
                                <div className="flex items-center justify-between "><p className="text-gray-500 font-medium">County :</p><p className="font-semibold">{detailsData?.country}</p></div>
                            </div>
                        </div>

                    </div>
                </div>



            </div>

            <ProposalModal open={openProposal} setOpen={setOpenProposal} id={detailsData?.seller} />
        </div>
    );
};

export default ProductDetails;