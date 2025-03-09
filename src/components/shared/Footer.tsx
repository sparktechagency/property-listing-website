"use client";
import { useRouter } from "next/navigation";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaTwitter,
} from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

const Footer = () => {
    const router = useRouter();
    return (
        <div className="bg-[#F8F8F8] lg:h-[400px] lg:pb-0 pb-5 flex items-center justify-center">
            <div className="flex lg:flex-row flex-col items-start justify-center  gap-10   container mx-auto">
                <div className=" w-full  flex items-center justify-center h-full"> 
                    <div className=" space-y-5 text-primary pt-10"> 
                    <h1 className="text-3xl font-bold">Creator Brief</h1>
                    <p className="w-[90%] text-[#FFC77E]">
                        There are many variations of passages of lorem ipsum available.
                    </p>
                    </div>
                </div>
                <div className=" w-full">
                    <h1 className="text-xl font-semibold my-5">Services</h1>
                    <div className="space-y-2">
                        <p className=" ">Houses</p>
                        <p className=" ">Apartments</p>
                        <p className=" ">Office</p>
                        <p className=" ">Restaurant</p>
                        <p className=" ">Cafe</p>
                        <p className=" ">Firm</p>
                        <p className=" ">Sell your business</p>

                    </div>
                </div>
                <div className=" w-full">
                    <h1 className="text-xl font-semibold my-5">Legal</h1>
                    <ul className="space-y-2 ">
                        <p className="cursor-pointer " onClick={() => router.push("/about")}>About Us</p>
                        <p className="cursor-pointer " onClick={() => router.push("/contact")}>Contact Us</p>
                        <p className="cursor-pointer " onClick={() => router.push("/privacy")}>Privacy Policy</p>
                        <p className="cursor-pointer " onClick={() => router.push("/terms")}>Terms & conditions</p>

                    </ul>
                </div>
                <div className="w-full mt-2">
                    <h1 className="text-xl font-semibold pb-3">Social Media</h1>
                    <p>abc@gmail.com</p>
                    <p>+8809245684124</p>
                    <div className="flex gap-5 pt-3">
                        <div className="flex gap-5 text-white">
                            <div className="p-2 bg-black rounded-full">
                                <FaFacebookF size={25} />
                            </div>
                        </div>
                        <div className="flex gap-5 text-white">
                            <div className="p-2 bg-black rounded-full">
                                <FaTwitter size={25} />
                            </div>
                        </div>
                        <div className="flex gap-5 text-white">
                            <div className="p-2 bg-black rounded-full">
                                <PiInstagramLogoFill size={25} />
                            </div>
                        </div>
                        <div className="flex gap-5 text-white">
                            <div className="p-2 bg-black rounded-full">
                                <FaLinkedinIn size={25} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;