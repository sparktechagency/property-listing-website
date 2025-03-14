/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @next/next/no-img-element */
"use client"

import { SetLocalStorage } from "@/app/util/LocalStroage";
import TextInput from "@/components/shared/TextInput";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { Checkbox, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Swal from "sweetalert2";

const Login = () => {
  const router = useRouter() 
  const [login , {isError , isLoading , isSuccess , error , data} ] = useLoginMutation() 

  useEffect(() => {
    if (isSuccess) {
      if (data) {
        Swal.fire({
          text: data?.message,
          icon: "success",
          timer: 1500,
          showConfirmButton: false
        }).then(() => {

          if (data) {
            SetLocalStorage("accessToken", data?.data?.accessToken);
          }
          router.push("/");

        });
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
  }, [isSuccess, isError, error, data, router]); 


  const onFinish = async (values: { email: string, password: string }) => {

    await login(values)

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
            {isLoading? "Loading..." : "Sign in"} 
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