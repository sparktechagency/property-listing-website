"use client";
import { useRouter } from "next/navigation";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";

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
                        <p className=" ">Real Estate Agents</p>
                        <p className=" ">Home Measurement</p>
                        <p className=" ">Sells product</p>
                        <p className=" ">Buying</p>
                        <p className=" ">Selling</p>

                    </div>
                </div>
                <div className=" w-full">
                    <h1 className="text-xl font-semibold my-5">Legal</h1>
                    <ul className="space-y-2 ">
                        <p className="cursor-pointer " onClick={() => router.push("/about")}>About Us</p>
                        <p className="cursor-pointer " onClick={() => router.push("/contact")}>Contact Us</p>
                        <p className="cursor-pointer " onClick={() => router.push("/privacy")}>Privacy Policy</p>

                    </ul>
                </div>
                <div className="w-full mt-2">
                    <h1 className="text-xl font-semibold pb-3">Social Media</h1>
                    <p>abc@gmail.com</p>
                    <p>+8809245684124</p>
                    <div className="flex gap-5 pt-3">
                        <div className="flex gap-5 text-white">
                            <div className="p-2 bg-black rounded-full">
                                <FaFacebook size={25} />
                            </div>
                        </div>
                        <div className="flex gap-5 text-white">
                            <div className="p-2 bg-black rounded-full">
                                <FaTwitter size={25} />
                            </div>
                        </div>
                        <div className="flex gap-5 text-white">
                            <div className="p-2 bg-black rounded-full">
                                <FaInstagram size={25} />
                            </div>
                        </div>
                        <div className="flex gap-5 text-white">
                            <div className="p-2 bg-black rounded-full">
                                <FaLinkedin size={25} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;