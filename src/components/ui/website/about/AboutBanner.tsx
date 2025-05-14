
const AboutBanner = () => {
    return (
        <div className=" flex items-center justify-center  h-[500px]" style={{
            backgroundImage: `url('/aboutBanner.svg')`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat', 
            width: "100%", 
            height: "400px",   
            objectFit: 'cover', 
        }}>   
            <p className=" text-white text-[48px] font-semibold  "> About Us</p>
        </div>
    );
};

export default AboutBanner;