/* eslint-disable @next/next/no-img-element */
"use client";

import TextInput from "@/components/shared/TextInput";
import {  ConfigProvider, Form, Input, Select } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface ValuesType {
  name: string;
  email: string;
  contact: string;
  password: string;
  confirm_password: string;
}

const Register: React.FC = () => {
  const router = useRouter();

  const onFinish = async (values: ValuesType) => {
    console.log(values);
    localStorage.setItem("userType", "register");
    router.push(`/verify-otp?email=${values.email}`);
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-[25px] font-semibold mb-2">Register Now</h1>
        <p className="text-[#11D279]">
          To proceed with your application, we first need some information from
          you
        </p>
      </div>
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 0,
          },
          components: {
            Input: {
            //   borderColor: "#d9d9d9",  
              hoverBorderColor: "#d9d9d9",
            },
          },
        }}
      >
        <Form onFinish={onFinish} layout="vertical">
          <TextInput name="name" label="Full Name" />
          <TextInput name="email" label="Email" />
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please enter your password!",
              },
            ]}
            className="mb-5"
          >
            <Input.Password
              placeholder="Enter password"
              className="border border-gray-300 h-[50px] bg-white rounded-lg"
            />
          </Form.Item>

          <Form.Item
            name="confirm_password"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The passwords do not match!")
                  );
                },
              }),
            ]}
            className="mb-10"
          >
            <Input.Password
              placeholder="Confirm password"
              className="border border-gray-300 h-[50px] bg-white rounded-lg"
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

          <Form.Item>
            <button
              type="submit"
              className="w-full h-[45px] text-white font-medium text-lg bg-primary rounded-lg flex items-center justify-center mt-4"
            >
              Sign up
            </button>
          </Form.Item>
        </Form>
      </ConfigProvider> 

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

      <div className="flex items-center justify-center gap-1 py-4">
        <p className="text-[#636363]">Have an account?</p>
        <Link href="/login" className="text-[#1854F9] font-semibold">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Register;
