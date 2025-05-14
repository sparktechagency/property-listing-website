"use client"
import { BsCheck2Circle } from "react-icons/bs";
interface FeatureItemProps {
  text: string;
} 
const WhyChooseUs = () => { 

    const  FeatureItem = ({ text }: FeatureItemProps) => {
        return (
          <div className="flex items-center gap-4 mb-2">
            <BsCheck2Circle size={20}  className="text-[#79CAA1]" />
            <p className="text-white text-[20px]">{text}</p>
          </div>
        );
      }   

    return (
        <div className="container lg:h-[620px] h-[450px] lg:mb-[60px] mb-[35px]">
             {/* Why Choose Us Section */}
    
        <div className=" flex items-center justify-center rounded-xl lg:ps-[120px] ps-5" style={{
            backgroundImage: `url('/WhUs.svg')`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat', 
            width: "100%", 
            height: "100%",   
            objectFit: 'cover', 
            backgroundColor: "#ffe6f7"
        }}>  
              <div className="text-white">
                <p  className="lg:text-[48px] text-[28px] font-semibold mb-5 text-white">
                  Why choose us?
                </p>
                <p className="text-gray-200 lg:text-[24px] text-[18px] font-medium mb-8 lg:w-3/6">
                  We handle all paperwork with precision and efficiency, ensuring compliance and accuracy, giving you peace of mind and saving time.
                </p>
                
                <div className="lg:mt-8 mt-4">
                  <FeatureItem text="Trusted Company" />
                  <FeatureItem text="Transparent Pricing" />
                  <FeatureItem text="Professional Support" />
                </div>
              </div>
        </div>  
   
        </div>
    );
};

export default WhyChooseUs;