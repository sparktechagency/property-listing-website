"use client"
import TextInput from "@/components/shared/TextInput";
import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";


const data = [
    {
        icon: <PiPhoneCallLight size={20} />,
        title: " Call to us ",
        content: "+88 09178564101"
    },
    {
        icon: <CiMail size={20} />,
        title: "Write to us",
        content: "abc@gmail.com"
    },
    {
        icon: <CiLocationOn size={20} />,
        title: "Visit our location",
        content: "8 Marina Boulevard, Singapore"
    },
]
const Contact = () => {
    return (
        <div className="container py-[60px]">

            <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-3 gap-6   ">
                {
                    data?.map((value, index) => (
                        <div key={index} className=" flex items-center gap-2 ">
                            <div className=" w-[44px] h-[44px] bg-[#E6F1FC] rounded-full flex items-center justify-center ">
                                {value?.icon}
                            </div>

                            <div className="flex flex-col gap-[2px]">
                                <p className="text-[16px] text-[#757575] font-medium "> {value?.title} </p>
                                <p className="lg:text-[20px] text-[16px] text-[#000000] font-semibold"> {value?.content} </p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className=" mt-16">
                <Form layout="vertical" >

                    <div className=" grid lg:grid-cols-2 grid-cols-1 gap-x-4">
                        <TextInput name="fullName" label="Full Name" />
                        <TextInput name="email" label="Email" />
                        <TextInput name="contact" label="Contact Number" /> 
                        <TextInput name="subject" label="Subject" />
                    </div>

                    <Form.Item name="message" label={<p className="text-[#4E4E4E] text-[16px]">Your Message</p>}>
                        <TextArea rows={4} placeholder="Enter your message" style={{
                            border: "1px solid #d9d9d9",
                            outline: "none",
                            boxShadow: "none",
                            backgroundColor: "white",
                            resize: "none"
                        }} />
                    </Form.Item> 

                    <div className=" flex items-center justify-end"> 
                        <Form.Item> 
                            <button type="submit" className=" px-10 rounded bg-primary text-white text-lg h-[45px] font-medium"> Send Message </button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Contact;