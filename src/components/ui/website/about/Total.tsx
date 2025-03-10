
 const data  = [
    {
        number: "4.2K" , 
        title: "Total Property" ,
    } , 
    {
        number: "160+" , 
        title: "Total Buyer" ,
    } , 
    {
        number: "88+" , 
        title: "Total Seller" ,
    } , 
    {
        number: "5.2K" , 
        title: "Customer Review" ,
    } , 

 ]
const Total = () => {
    return (
        <div className=" flex items-center justify-center w-full   lg:h-[500px] h-auto" style={{
            backgroundImage: `url('/aboutSummery.svg')`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat', 
            width: "100%", 
            height: "300px",   
            objectFit: 'cover', 
        }}> 

        <div className=" flex lg:flex-row flex-wrap gap-4  items-center justify-between w-full container " >  
           {
            data.map((item , index) => (  
                <div key={index} className="flex flex-col items-center "> 
                <p className=" text-primary lg:text-[78px] text-[28px] font-extrabold  "> {item.number}  </p> 
                <p className=" text-white lg:text-[24px] text-[20px] font-normal  "> {item.title} </p>
            </div> 
            ))
           }

        </div>
            
        </div>
    );
};

export default Total;