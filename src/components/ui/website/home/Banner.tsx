import Image from "next/image";


const Banner = () => {
    return (  
        <div className=" flex items-center justify-center  h-[calc(100vh-180px)] "> 
        <div className=" container  ">
      <div className=" w-full ">
        <div className="flex flex-col md:flex-row  rounded-tr-[100px] rounded-bs-3xl overflow-hidden ">
          {/* Property Image Section */}
          <div className="md:w-1/2 relative h-[300px] md:h-auto">
            <Image
              src="/banner.svg" 
              alt="Luxury Property" 
              fill
              className="object-cover"
            />
   
          </div>
          
          {/* Property Details Section */}
          <div className="md:w-1/2 p-8 md:p-12 bg-[#FFF8EE]">
   
            
            <h1 className="text-[60px]  font-semibold text-[#000000] mb-5">
              Elegant Property for Sale.
            </h1>
            
            <p className="text-[#757575] mb-8 text-[20px] font-normal">
              Discover this exquisite property, blending modern luxury with timeless elegance. Spacious interiors, stunning design, and premium amenities create a perfect living space. Located in a prime neighborhood, it offers comfort, style, and convenience. Don&apos;t miss this opportunity!
            </p>
            
            <div className="mb-6">
              <p className="text-[20px] text-[#929191] uppercase font-normal">PRICE STARTS AT</p>
              <p className="text-[54px] font-bold text-[#0171E2]">$2,50,00</p>
            </div>
            

          </div>
        </div>
      </div>
    </div>

        </div>
    );
};

export default Banner;