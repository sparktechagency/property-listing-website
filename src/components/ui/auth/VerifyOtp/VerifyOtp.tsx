/* eslint-disable @next/next/no-img-element */
"use client"
import { Button, Form, Typography } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react"
import OTPInput from "react-otp-input";

const { Text } = Typography;

const VerifyOtp = () => {
  const router = useRouter()
  const [otp, setOtp] = useState<string>("");
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const emailFromQuery = new URLSearchParams(window.location.search).get('email');
    setEmail(emailFromQuery);
  }, []);

  console.log(email);

  const onFinish = async (values: { otp: string }) => {
    const userType = localStorage.getItem("userType")
    console.log(values);
    if (userType === "forget") {
      router.push(`/reset-password`);
    } else {
      router.push(`/login`);
    }
  };


  const handleResendEmail = async () => {

  };
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

          <div className="flex items-center justify-center mb-6">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={5}
              inputStyle={{
                height: 50,
                width: 50,
                borderRadius: "8px",
                margin: "16px",
                fontSize: "20px",
                border: "1px solid #818181",
                color: "#2B2A2A",
                outline: "none",
                marginBottom: 10
              }}
              renderInput={(props) => <input {...props} />}
            />

          </div>

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