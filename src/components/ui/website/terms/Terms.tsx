"use client"
import { useGetTermsQuery } from "@/redux/features/termsApi";

const Terms = () => { 
    const {data:terms} = useGetTermsQuery(undefined) 

    return (
       
             <div className=" container py-[64px]">

<div className=" bg-[#F8F8F8] w-full rounded   ">

    <p className=" text-[#757575] text-[24px] font-semibold py-2 px-5"> Terms & conditions </p>
</div>

<div className=" mt-10 border border-[#757575]/30 rounded p-5 text-[#757575]">
  <div dangerouslySetInnerHTML={{__html: terms?.content}} />
</div>
</div> 
       
    );
};

export default Terms;