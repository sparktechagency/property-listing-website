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
        <div className="container h-[620px] mb-[60px]">
             {/* Why Choose Us Section */}
    
        <div className=" flex items-center justify-center rounded-xl ps-[120px]" style={{
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
                <p  className="text-[48px] font-semibold mb-5 text-white">
                  Why choose us?
                </p>
                <p className="text-gray-200 text-[24px] font-medium mb-8 w-3/6">
                  We handle all paperwork with precision and efficiency, ensuring compliance and accuracy, giving you peace of mind and saving time.
                </p>
                
                <div className="mt-8">
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