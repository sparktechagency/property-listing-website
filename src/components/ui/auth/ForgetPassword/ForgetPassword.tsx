/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @next/next/no-img-element */
"use client"
import { SetLocalStorage } from "@/app/util/LocalStroage";
import { useForgetPasswordMutation } from "@/redux/features/auth/authApi";
import {  Form, Input } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import Swal from "sweetalert2";

interface forgetPassProps {
  email: string
} 

const ForgetPassword = () => { 
    const router  = useRouter()  
    const [forgetPassword] = useForgetPasswordMutation()


    const onFinish = async(values: forgetPassProps) => { 

      await forgetPassword(values).then((res)=>{  

           if (res?.data?.success) {
                  Swal.fire({
                    text: res?.data?.message,
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                  }).then(() => { 
          
                      const value = {
                          userType: "loginUser",
                          email: values?.email
                      }
                      if (values?.email) {
                          SetLocalStorage("userInfo", JSON.stringify(value))
                      }
              
                      router.push(`/verify-otp?email=${values.email}`);  
                      
                  });
                } else {
                  Swal.fire({
                    title: "Oops",
                    //@ts-ignore
                    text: res?.error?.data?.message,
                    icon: "error",
                    timer: 1500,
                    showConfirmButton: false,
                  });
          
                }
              
      })
  } 
  
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