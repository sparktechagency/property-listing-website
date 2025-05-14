"use client"
import { imageUrl } from "@/redux/base/baseApi";
import { useGetBlogsQuery } from "@/redux/features/blogApi";
import { ConfigProvider, Pagination } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MainBlogs = () => {
  const [page, setPage] = useState(1)
  const limit = 8
  const { data: blogs } = useGetBlogsQuery({ page, limit })

  return (
    <div className="container mx-auto py-[60px]">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        {blogs?.blogs?.map((news: { _id: string, image: string, title: string }, index: number) => {
          return (
            <div
              key={index}
              className="flex relative bg-red-200 items-end group overflow-hidden cursor-pointer"
            >
              <Image
                alt="news"
                src={news?.image?.startsWith("https") ? news?.image : `${imageUrl}${news?.image}`}
                width={1300}
                height={300}  
                className="w-full h-full object-cover"
             
              />

              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

              <div className="absolute w-full left-0  p-4">
                <div className="lg:translate-y-[126px]  translate-y-[137px]  transition-all duration-500 group-hover:translate-y-0">
                  <p className="font-semibold lg:text-[24px] text-[21px] leading-[32px] mb-2 text-[#FAFAFA]"
                  >{news.title}</p>
                  <Link href={`/blogs/${news?._id}`}>
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

      <div>
        <ConfigProvider
          theme={{
            components: {
              Pagination: {
                itemActiveBg: "#FFAB3E"
              },
            },
            token: {
              colorPrimary: "#ffffff",
              colorBorder: "#FFAB3E",


            },
          }}
        >

          <Pagination
            align="center"
            defaultCurrent={blogs?.pagination?.page}
            onChange={(page) => setPage(page)}
            total={blogs?.pagination?.total}
          />
        </ConfigProvider>
      </div>

    </div>
  );
};

export default MainBlogs;