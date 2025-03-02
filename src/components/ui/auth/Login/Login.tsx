/* eslint-disable @next/next/no-img-element */
"use client"

import TextInput from "@/components/shared/TextInput";
import { Checkbox, ConfigProvider, Form, Input, Select } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const router = useRouter()


  const onFinish = async (values: { email: string, password: string }) => {
    console.log(values);

    router.push("/")


  };

  return (
    <div style={{
      background: '#ffffff',
      padding: 30,
      borderRadius: 10,
      width: 670,
      position: 'relative',
      zIndex: 2,
    }}
      className={` shadow-lg  `}
    >
      <div className=" mb-6 text-center">
        <h1 className="text-[25px] font-semibold mb-2">Login to Account!</h1>
        <p className="text-[#757575] font-semibold"> Please enter your email and password to continue.</p>
      </div>
      <Form
        onFinish={onFinish}
        layout="vertical"
      >

        <TextInput name={"email"} label={"Email"} />

        <Form.Item
          name="password"
          label={<p>Password</p>}
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input.Password
            type="password"
            placeholder="Enter your password"
            style={{
              height: 45,
              border: "1px solid #d9d9d9",
              outline: "none",
              boxShadow: "none"
            }}
          />
        </Form.Item>

        <Form.Item
          name="user-role"
          label={<p>User Role</p>}
          rules={[
            {
              required: true,
              message: "Please input your User Role!",
            },
          ]}
        >
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#FFAB3E",
              },
            }}
          >

            <Select
              defaultValue="Buyer"
              style={{ width: "100%", height: 45, }}
              options={[
                { value: 'Buyer', label: 'Buyer' },
                { value: 'Seller', label: 'Seller' },
              ]}
            />
          </ConfigProvider>
        </Form.Item>

        <div className="flex items-center justify-between">
          <Form.Item style={{ marginBottom: 0 }} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a
            className="login-form-forgot text-primary font-semibold"
            href="/forgot-password"
          >
            Forgot password
          </a>
        </div>

        <Form.Item style={{ marginBottom: 0 }}>
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
            className="flex items-center justify-center bg-primary rounded-lg"
          >
            {/* {isLoading? < Spinner/> : "Sign in"} */} Sign in
          </button>
        </Form.Item>


      </Form>

      <div className="flex items-center gap-5 w-full my-5">
        <div className=" flex items-center gap-1 px-4 py-1 bg-[#FAFAFA] ">
          <div className=" border-r border-gray-300 pe-3">
            <img src="/google.png" alt="" className="w-[28px] h-[28px]" />
          </div>
          <p className="text-[#636363] text-lg ps-2">Continue with Google</p>
        </div>

        <div className=" flex items-center gap-1 px-4 py-1 bg-[#FAFAFA] ">
          <div className=" border-r border-gray-300 pe-3">
            <img src="/facebook.png" alt="" className="w-[28px] h-[28px]" />
          </div>
          <p className="text-[#636363] text-lg ps-2">Continue with facebook</p>
        </div>
      </div>

      <div className=" flex items-center justify-center gap-1 py-4">
        <p className="text-[#636363]">Don’t have any account?</p>
        <Link href="/register" className="text-[#1854F9] font-semibold" > Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;