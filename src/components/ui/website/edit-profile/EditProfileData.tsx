/* eslint-disable @next/next/no-img-element */
"use client"
import TextInput from "@/components/shared/TextInput";
import { useProfileQuery } from "@/redux/features/auth/authApi";
import { Form } from "antd";
import { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";


const EditProfileData = () => { 
        const [form] = Form.useForm()
        const [imgURL, setImgURL] = useState("/user2.jpg");  
        const {data:profile} = useProfileQuery(undefined); 
        console.log(profile);

        useEffect(() => {
            form.setFieldsValue({
                fullName: profile?.name,
                email: profile?.email,
            });
        }, [form , profile]); 
 

        const onChange = async (e:React.ChangeEvent<HTMLInputElement> ) => {
            const file = e.target.files?.[0]; 
           
            if (file) {
              const imgUrl = URL.createObjectURL(file);
              setImgURL(imgUrl);
            }
          };  

    return (
        <div className="">
              <div className="flex items-center gap-9 "> 
              <div className="flex  py-5">
              <input
                onChange={onChange}
                type="file"
                id="img"
                className="hidden"
              />
              <label
                htmlFor="img"
                className="relative w-[120px] h-[120px] cursor-pointer rounded-full  bg-white bg-cover bg-center"
                style={{ backgroundImage: `url(${imgURL})` }}
              >
                <div
                  className="absolute bottom-1 -right-1 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center"
                >
                  <AiOutlineEdit size={20} className="text-primary" />
                </div>
              </label>
            </div> 
            <div>
                    <p className=" text-[16px] font-medium text-[#757575] "> Hello !! </p>
                    <p className=" text-[24px] font-semibold text-[#000000] "> Jone Doe </p>
                </div>
            </div>


            <Form layout="vertical" form={form} className="mt-10" >
                <TextInput name={"fullName"} label={"Full Name"} />
                <TextInput name={"email"} label={"Email"} /> 

                <Form.Item className="flex items-center justify-end mt-5"> 
                    <button className=" lg:w-[250px] w-[150px] h-[45px] bg-primary text-white lg:text-[20px] text-[16px] font-normal flex items-center justify-center rounded-lg "> Save & Change </button>
                </Form.Item>
            </Form>

        </div>
    );
};

export default EditProfileData;