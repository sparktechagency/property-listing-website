/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @next/next/no-img-element */
"use client"
import { useResetPasswordMutation } from "@/redux/features/auth/authApi";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Swal from "sweetalert2";

const ResetPassword = () => {
  const router = useRouter() 
  const [resetPassword , {isError , isLoading , isSuccess , error , data}] = useResetPasswordMutation()


  useEffect(() => {
    if (isSuccess) {
      if (data) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: data?.message,
          timer: 1500,
          showConfirmButton: false
        }).then(() => {
          router.push("/login")
        
        });
      }
    }
    if (isError) {
      Swal.fire({
       //@ts-ignore
        text: error?.data?.message,  
        icon: "error",
      });
    }
  }, [isSuccess, isError, error, data, router]);  


  const onFinish = async(values:{ newPassword: string , confirmPassword: string}) => {   
    await resetPassword(values)
  }  

  return (
    <div className="grid grid-cols-2" >

      <div>
        <img src="/reset.png" alt="" className="w-full h-full" />
      </div>

      <div>

        <h1 className="  text-[32px] font-semibold text-[#000000] pb-4  ">Reset Password</h1>
        <Form
          layout="vertical"
          onFinish={onFinish}
        >

          <Form.Item
            name="newPassword"
            label={<p
              style={{
                display: "block",
                color: "#5C5C5C",
              }}

              className="font-semibold "
            >
              New Password
            </p>}
            rules={[
              {
                required: true,
                message: "Please input your new Password!",
              },
            ]}
            style={{ marginBottom: 0 }}
          >
            <Input.Password
              type="password"
              placeholder="Enter New password"
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
            dependencies={["newPassword"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("newPassword") === value) {
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


          <Form.Item style={{ marginBottom: 0 }}>
            <Button
              htmlType="submit"
              style={{
                width: '100%',
                height: 45,
                color: "white",
                fontWeight: "400px",
                fontSize: "18px",
                background: "#FFAB3E",
                marginTop: 20
              }}
            >
           {isLoading ? "Updating..." : "Update"}   
            </Button>
          </Form.Item>



        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;