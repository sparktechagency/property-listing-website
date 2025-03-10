import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
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
   
]

const BlogDetails = () => {
    return ( 
        <div> 
        <div className="container mt-10">
        <div className="w-full h-[456px] relative">
          <img
            alt="new details"
            src="/aboutSummery.svg"
         className="w-full h-full object-cover"
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
            > 9 Things Real Estate Agents Wish You Knew About Selling Your Home </p>
          </div>
        </div>
  
        <p className="text-[#767676] text-[16px] leading-[21px] font-normal mt-10">
        Sit at the arch, a place of life and activity. The convenience is not far from the serious duties of just the right weight. Structured, the path leads towards positive outcomes. At the front, we must understand the power of making forward movement in addition to easing the burdens.


        </p>
        <p className="text-[#767676] text-[16px] leading-[21px] font-normal mt-10">
        In understanding every aspect, the form will naturally fit in well. It’s crucial to think of the things ahead while not forgetting to focus. The seamless work is carried forward with careful thought. Balancing all the necessary things in good timing is just as important for success.


        </p>
        <p className="text-[#767676] text-[16px] leading-[21px] font-normal mt-10">
        The environment remains stable, inviting and calm, allowing space for growth. The experience is passive, offering a moment of freedom in motion. There is no obstacle to the flow, just a serene moment of passage. The atmosphere offers just enough space to experience the journey without distraction.

        </p>
        <p className="text-[#767676] text-[16px] leading-[21px] font-normal mt-10">
        Feel a sense of harmony and balance as you sit in the comfort zone. There&apos;s no rush, only a steady path ahead. Embrace the gentle rhythm as everything aligns in place. The environment supports the calm and ease of each step forward, offering the perfect balance between movement and stillness.
        </p>
      </div>
      <div className="container mx-auto py-[60px]"> 
        <p className="lg:text-[32px] text-[28px] font-semibold text-[#757575] pb-5">Another Blogs </p>
           <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          {data?.map((news, index: number) => {
            return (
              <div
                key={index}
                className="flex relative bg-red-200 items-end group overflow-hidden cursor-pointer"
              >
                <img
                  alt="news"
                  src={news.image}
                  className="w-full h-[300px] object-cover"
                /> 

<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

                <div className="absolute w-full left-0  p-4">
                  <div className="lg:translate-y-[126px] translate-y-[126px]  transition-all duration-500 group-hover:translate-y-0">
                    <p className="font-semibold lg:text-[24px] text-[18px] lg:leading-[32px] mb-2 text-[#FAFAFA]"
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
        </div>
    );
};

export default BlogDetails;