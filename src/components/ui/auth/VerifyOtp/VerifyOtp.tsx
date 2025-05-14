/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @next/next/no-img-element */
"use client"
import { GetLocalStorage, SetLocalStorage } from "@/app/util/LocalStroage";
import { useOtpVerifyMutation, useResendOtpMutation } from "@/redux/features/auth/authApi";
import { Button, ConfigProvider, Form, Input, Typography } from "antd";
import { useRouter } from "next/navigation";
import React, {  useEffect, useState } from "react"
import Swal from "sweetalert2";

const { Text } = Typography;

const VerifyOtp = () => {
  const router = useRouter()
  const [email, setEmail] = useState<string | null>(null);  
  const details =  GetLocalStorage("userInfo"); 
  const userInfo = details ? JSON.parse(details) : null;
  const userType = userInfo?.userType
const [otpVerify] = useOtpVerifyMutation()   
const [resendOtp] = useResendOtpMutation()


useEffect(() => {

  if (userInfo?.email) {
    setEmail(userInfo.email);
  }
}, [userInfo]); 

  const onFinish = async (values: { otp: string  }) => {
   
    const data = {
      email: email,
      oneTimeCode: parseInt(values?.otp)
    } 

    await otpVerify(data).then((res) => {
      if (res?.data?.success) {
        Swal.fire({
          text: res?.data?.message,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {

          if (userType === "registerUser") {         
            if (data) {
              router.push("/login") 
            }
          } else { 
            SetLocalStorage("resetToken", res?.data?.data);
            router.push("/reset-password") 
          }

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
  };
 

  const handleResendEmail = async () => {
    const value = {
      email: email
    }
    await resendOtp(value).then((res: any) => {
      if (res?.data?.success) {
        Swal.fire({
          text: res?.data?.message,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        })
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
        <img src="/otp.png" alt="" className="w-full h-full" />
      </div>

      <div className="w-1/2">
        <div className=" text-start flex flex-col  gap-2 mb-4 ">
          <h1 className="  text-[32px] font-semibold text-[#000000]  ">Verification code</h1>
          <p className=" text-[#757575] font-normal text-[20px]  ">We&apos;ll send a verification code to your email. Check your inbox and
            enter the code here.</p>
        </div>


        <Form layout="vertical" onFinish={onFinish}>

        <ConfigProvider
              theme={{
                components: {
                  Input: {
                    // lineHeight: 3,
                    controlHeight: 55, 
                    borderRadius: 10,
                  },
                },
                token: {
                  colorPrimary: '#292C61',
                },
              }}
            >
              <Form.Item
                className="flex items-center justify-center mx-auto"
                name="otp"
                rules={[{ required: true, message: 'Please input otp code here!' }]}
              >
                <Input.OTP
                  style={{
                    width: 300,
                    height: 50,

                  }}
                  className=""
                  // variant="filled" 
                  length={6}
                />
              </Form.Item>
            </ConfigProvider>

          <div className="flex items-center justify-between mb-6 ">
            <Text>Don&apos;t received code?</Text>

            <p
              onClick={handleResendEmail}
              className="login-form-forgot underline font-medium"
              style={{ color: "#00B047", cursor: "pointer" }}
            >
              Resend
            </p>
          </div>

          <Form.Item style={{ marginBottom: 0 }}>
            <Button
              htmlType="submit"
              style={{
                width: "100%",
                height: 45,
                border: "1px solid #d9d9d9",
                outline: "none",
                boxShadow: "none",
                background: "#FFAB3E",
                color: "white"
              }}
            >
              Verify
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default VerifyOtp;