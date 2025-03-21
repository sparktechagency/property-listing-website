"use client"
import { useGetPrivacyQuery } from "@/redux/features/privacyApi";

const Privacy = () => { 
    const {data:privacy} = useGetPrivacyQuery(undefined)
    return (
        <div className=" container py-[64px]">

            <div className=" bg-[#F8F8F8] w-full rounded   ">

                <p className=" text-[#757575] text-[24px] font-semibold py-2 px-5"> Privacy policy </p>
            </div>

            <div className=" mt-10 border border-[#757575]/30 rounded p-5 text-[#757575]">
   <div  dangerouslySetInnerHTML={{__html: privacy?.content}}/>
            </div>
        </div>
    );
};

export default Privacy;