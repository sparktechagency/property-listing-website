import Image from "next/image";
import Link from "next/link";
 
const data = [
    { 
        id:1 , 
        image:"/blog1.svg",
        title:"9 Things Real Estate Agents Wish You Knew About Selling Your Home",        
    } , 
    {
        id:2 , 
        image:"/blog2.svg",
        title:"9 Things Real Estate Agents Wish You Knew About Selling Your Home",        
    } , 
    {
        id:3 , 
        image:"/blog3.svg",
        title:"9 Things Real Estate Agents Wish You Knew About Selling Your Home",        
    } , 
    {
        id:4 , 
        image:"/blog4.svg",
        title:"9 Things Real Estate Agents Wish You Knew About Selling Your Home",        
    } , 
    {
        id:5 ,
        image:"/blog2.svg",
        title:"9 Things Real Estate Agents Wish You Knew About Selling Your Home",        
    } , 
    {
        id:6 , 
        image:"/blog3.svg",
        title:"9 Things Real Estate Agents Wish You Knew About Selling Your Home",        
    } , 
]
const MainBlogs = () => {
    return (
        <div className="container mx-auto py-[60px]">
           <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          {data?.map((news, index: number) => {
            return (
              <div
                key={index}
                className="flex relative bg-red-200 items-end group overflow-hidden cursor-pointer"
              >
                <Image
                  alt="news"
                  src={news.image}
                  width={1300}
                  height={300}
                /> 

<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

                <div className="absolute w-full left-0  p-4">
                  <div className="lg:translate-y-[126px]  translate-y-[137px]  transition-all duration-500 group-hover:translate-y-0">
                    <p className="font-semibold lg:text-[24px] text-[21px] leading-[32px] mb-2 text-[#FAFAFA]"
                    >{news.title}</p>
                    <Link href={`/blogs/${news.id}`}>
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
    );
};

export default MainBlogs;