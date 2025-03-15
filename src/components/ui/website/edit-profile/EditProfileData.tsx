/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @next/next/no-img-element */ 
//@ts-nocheck
"use client"
import TextInput from "@/components/shared/TextInput";
import { imageUrl } from "@/redux/base/baseApi";
import { useProfileQuery, useUpdateProfileMutation } from "@/redux/features/auth/authApi";
import { Form } from "antd";
import { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import Swal from "sweetalert2";


const EditProfileData = () => {
  const [form] = Form.useForm() 
  const [imgURL, setImgURL] = useState("/user2.jpg");
  const [imgFile, setImageFile] = useState(null);
  const { data: profile } = useProfileQuery(undefined);
  const [updateProfile , {isLoading, isSuccess, isError, error, data}] = useUpdateProfileMutation();

  useEffect(() => {

    if (profile) {
      form.setFieldsValue({
        name: profile?.name,
        email: profile?.email,
      });

      setImgURL(profile?.profile?.startsWith("https") ? profile?.profile : `${imageUrl}${profile?.profile}`)
    }
  }, [form, profile]); 

    useEffect(() => {
      if (isSuccess) {
        if (data) {
          Swal.fire({
            text: data?.message,
            icon: "success",
            timer: 1500,
            showConfirmButton: false
          })
        }
  
      }
      if (isError) {
        Swal.fire({
          title: "Failed to Login",
          //@ts-ignore
          text: error?.data?.message,
          icon: "error",
        });
      }
    }, [isSuccess, isError, error, data]);  


  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setImgURL(imgUrl);
      setImageFile(file)
    }
  };

  const onFinish = async (values: { name: string, email: string }) => {
    const formData = new FormData();

    if (imgFile) {
      formData.append("image", imgFile);
    }
    formData.append("name", values?.name);
    formData.append("email", values?.email);

    await updateProfile(formData).unwrap().then((res) => {
      console.log(res);
    })

  }

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
          <p className=" text-[24px] font-semibold text-[#000000] "> {profile?.name} </p>
        </div>
      </div>


      <Form layout="vertical" form={form} className="mt-10" onFinish={onFinish} >
        <TextInput name={"name"} label={"Full Name"} />
        <TextInput name={"email"} label={"Email"} />

        <Form.Item className="flex items-center justify-end mt-5">
          <button className=" lg:w-[250px] w-[150px] h-[45px] bg-primary text-white lg:text-[20px] text-[16px] font-normal flex items-center justify-center rounded-lg "> { isLoading ? "Loading..." : "Save & Change"} </button>
        </Form.Item>
      </Form>

    </div>
  );
};

export default EditProfileData;