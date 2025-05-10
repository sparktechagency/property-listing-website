/* eslint-disable @next/next/no-img-element */
"use client"
import { imageUrl } from "@/redux/base/baseApi";
import { useGetBlogsQuery } from "@/redux/features/blogApi";
import Link from "next/link";
import { useParams } from "next/navigation";


const BlogDetails = () => {  
  const {id} = useParams()
    const { data: blogs } = useGetBlogsQuery({ })   

    const blogsDetails = blogs?.blogs.find((blog:{ _id: string}) => blog._id === id)

    const filteredBlogs = blogs
    ? blogs?.blogs.filter((blog:{ _id: string}) => blog._id !== id) 
        .slice(0, 2) 
    : [];  


    return ( 
        <div> 
        <div className="container mt-10">
        <div className="w-full h-[456px] relative">
          <img
            alt="new details"
            src={blogsDetails?.image?.startsWith("https") ? blogsDetails?.image : `${imageUrl}${blogsDetails?.image}`}
         className="w-full h-full object-fill"
          />
  
          <div
            className="absolute left-0 -bottom-4 bg-white lg:w-[520px] w-full lg:rounded-r-3xl rounded-r-xl py-2"
            style={{
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            }}
          >
            <p
              className="font-medium lg:text-[32px] text-[20px] text-center   lg:leading-[48px] text-[#3E3E3E]"
            > {blogsDetails?.title} </p>
          </div>
        </div>
  
        <p className="text-[#767676] text-[16px] leading-[21px] font-normal mt-10">
            {blogsDetails?.content}
        </p>
      
      </div>
      <div className="container mx-auto py-[60px]"> 
        <p className="lg:text-[32px] text-[28px] font-semibold text-[#757575] pb-5">Another Blogs </p>
           <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          {filteredBlogs?.map((news:{ _id: string, image: string, title: string}, index: number) => {
            return (
              <div
                key={index}
                className="flex relative bg-red-200 items-end group overflow-hidden cursor-pointer"
              >
                <img
                  alt="news"
                  src={news.image?.startsWith("https") ? news.image : `${imageUrl}${news.image}`}
                  className="w-full h-[300px] object-fill"
                /> 

<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

                <div className="absolute w-full left-0  p-4">
                  <div className="lg:translate-y-[126px] translate-y-[126px]  transition-all duration-500 group-hover:translate-y-0">
                    <p className="font-semibold lg:text-[24px] text-[18px] lg:leading-[32px] mb-2 text-[#FAFAFA]"
                    >{news.title}</p>
                    <Link href={`/blogs/${news._id}`}>
                      <div className="text-[#FAFAFA] flex items-center gap-2 underline">
                        <p>Visit Now</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>  
        </div>
        </div>
    );
};

export default BlogDetails;