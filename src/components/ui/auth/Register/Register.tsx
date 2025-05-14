/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @next/next/no-img-element */
"use client";

import { SetLocalStorage } from "@/app/util/LocalStroage";
import TextInput from "@/components/shared/TextInput";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { ConfigProvider, Form, Input, Select } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Swal from "sweetalert2";

interface ValuesType {
  name: string;
  email: string;
  contact: string;
  password: string;
  confirm_password: string;
}

const Register: React.FC = () => {
  const router = useRouter();
  const [register, { isLoading }] = useRegisterMutation()

  const onFinish = async (values: ValuesType) => {
    await register(values).then((res) => {

      if (res?.data?.success) {
        Swal.fire({
          text: res?.data?.message,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          const value = {
            userType: "registerUser",
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
              {
                min: 8,
                message: "Password must be at least 8 characters long!",
              },
            ]}
            className="mb-5"
          >
            <Input.Password
              placeholder="Enter password"
              className=""
              style={{
                height: 45,
                border: "1px solid #d9d9d9",
                outline: "none",
                boxShadow: "none",
                backgroundColor: "white",
              }}
            />
          </Form.Item>

          <Form.Item
            style={{ marginBottom: 0 }}
            label={<p
              style={{
                display: "block",
                color: "#5C5C5C",
              }}
              className="font-semibold"
            >
              Confirm Password
            </p>}
            name="confirmPassword"
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
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              type="password"
              placeholder="Enter Confirm password"
              style={{
                border: "1px solid #E0E4EC",
                height: "45px",
                background: "white",
                borderRadius: "8px",
                outline: "none",
              }}
              className="mb-6"
            />
          </Form.Item>

          <TextInput name="contact" label="Contact" />

          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#FFAB3E",
              },
            }}
          >
            <Form.Item
              name="role"
              label={<p>User Role</p>}
              rules={[
                {
                  required: true,
                  message: "Please input your User Role!",
                },
              ]}
            >

              <Select
                placeholder="Select User Role"
                style={{ width: "100%", height: 45, }}
                options={[
                  { value: 'CUSTOMER', label: 'Customer' },
                  { value: 'SELLER', label: 'Seller' },
                ]}
              />
            </Form.Item>
          </ConfigProvider>

          <Form.Item>
            <button
              type="submit"
              className="w-full h-[45px] text-white font-medium text-lg bg-primary rounded-lg flex items-center justify-center mt-4"
            >
              {isLoading ? "Loading..." : "Sign up"}
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
