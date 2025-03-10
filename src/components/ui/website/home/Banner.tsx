import {  ConfigProvider, Input, Select } from "antd";
import { Search } from "lucide-react";

const Banner = () => {
    return (  
       <div className="container lg:min-h-[calc(100vh-140px)] h-[calc(100vh-250px)]   flex items-center justify-center lg:rounded-se-[100px]  lg:rounded-bl-[100px] w-full bg-no-repeat bg-center  bg-cover"
       style={{ backgroundImage: `url('/banner.jpg')` }}
       > 
         <div className=" flex items-center justify-center ">  
          <div className=" text-[#FFF7EC] lg:w-2/3 w-full"> 
 <p className=" lg:text-[50px] text-[25px] font-semibold text-center">The Power of Partnership. </p> 
 <p className=" lg:text-[18px] text-[16px] font-normal text-center lg:px-10 mt-5 "> Partnerships combine strengths to achieve shared goals, fostering trust, innovation, and problem-solving. They drive growth, market expansion, and long-term success in business sales. </p> 

 <div className="lg:bg-white mt-12 lg:rounded-full p-2 shadow-lg flex flex-col md:flex-row gap-4 w-full">
          <div className="flex-1 relative">
            <Input
              type="text"
              placeholder="Find a business"
              className="w-full pl-10 h-12 text-lg placeholder:text-gray-800" 
              prefix={<Search className=" text-gray-400 h-5 w-5" />} 
              style={{border:"none" }}
            />
           
          </div>
          <div className="flex-1 relative"> 
          <ConfigProvider
                        theme={{
                            token: {
                                colorPrimary: "#ffffff", 
                                colorBorder: "#ffffff",
                            },
                        }}
                    >
          <Select
                     placeholder="Select  Category"
                            style={{ width: "100%", height: 45, border:"none" }}
                            options={[
                                { value: 'category1', label: 'Category 1' },
                                { value: 'category2', label: 'Category 2' },
                                { value: 'category3', label: 'Category 3' },
                            ]}
                        /> 

                        </ConfigProvider>
           
          </div>
          <button
            className="h-12 px-8 text-lg bg-orange-400 hover:bg-orange-500 lg:rounded-full rounded-lg font-medium"
          >
            FIND
          </button>
        </div> 

          </div>
         </div>
       </div>
    );
};

export default Banner;