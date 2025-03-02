/* eslint-disable @next/next/no-img-element */
"use client"
import {  Form, Input } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const ForgetPassword = () => { 
    const router  = useRouter()

    const onFinish = async(values:{email:string}) => { 
        localStorage.setItem("userType","forget")
  
          router.push(`/verify-otp?email=${values?.email}`);
  
    };
  
    return (
        <div className=" flex items-center justify-center  w-full gap-10"> 

        <div className="w-1/2"> 
          <img src="/forget.png" alt="" className="w-full h-full" />
        </div> 

        <div className="w-1/2"> 

        <div className="text-start flex flex-col  gap-2 mb-4">
          <h1 className="text-[32px] font-semibold text-[#000000]  ">Forgot Password ?</h1>
        <p className="text-[#757575] font-normal text-[20px]"> Enter your email address to ger a verification code for resetting your password. </p>
        </div>

        <Form layout="vertical" onFinish={onFinish}>
          
            <Form.Item
              name="email"
              id="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input
                placeholder="Enter your email address"
                style={{
                  height: 45,
                  border: "1px solid #d9d9d9",
                  outline: "none",
                  boxShadow: "none"
                }}
              />
            </Form.Item>

          <Form.Item>
            <button
             
              type="submit"
              style={{
                width: '100%',
                height: 45,
                color: "white",
                fontWeight: "400px",
                fontSize: "18px",
           
                marginTop: 20
              }}
              className="flex items-center justify-center bg-primary rounded-lg font-medium"
            >
             Send OTP
            </button>
          </Form.Item>
        </Form>

        </div>
    </div>
    );
};

export default ForgetPassword;