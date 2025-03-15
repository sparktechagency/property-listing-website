/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useChangePasswordMutation } from "@/redux/features/auth/authApi";
import { ConfigProvider, Form, Input } from "antd";
import { useEffect } from "react";
import Swal from "sweetalert2";

const ChangePassword = () => { 
    const [form] = Form.useForm();   
    const [changePassword , {isLoading , isError , error , data, isSuccess}] = useChangePasswordMutation() 

    
        useEffect(() => {
          if (isSuccess) {
            if (data) {
              Swal.fire({
                text: data?.message,
                icon: "success",
                timer: 1500,
                showConfirmButton: false
              }).then(() => {
                form.resetFields();
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
        }, [isSuccess, isError, error, data , form]);   

const handleChangePassword = async(values:{currentPassword:string , newPassword:string , confirmPassword:string}) => {  
    console.log(values); 
    await changePassword(values).then((res) => { console.log(res);})
} 

    return (
        <div className="">
  
        <Form
            form={form}
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={handleChangePassword}
            className="w-full "
        >

            <ConfigProvider
                theme={{
                    token: {
                        borderRadius: 0,
                    },

                }}
            >
                <Form.Item
                    name="currentPassword"
                    label={<p className="block">Current Password</p>}
                    rules={[
                        {
                            required: true,
                            message: "Please input your current password!",
                        },
                    ]}
                    className="mb-5"
                >
                    <Input.Password
                        placeholder="Enter Password"
                        style={{
                            height: 48,
                            border: "1px solid #d9d9d9",
                            outline: "none",
                            boxShadow: "none",
                            backgroundColor: "white" , 
                            borderRadius: 10
                        }}
                    />
                </Form.Item>
            </ConfigProvider> 

            <ConfigProvider
                theme={{
                    token: {
                        borderRadius: 0,
                    },

                }}
            >

            <Form.Item
                name="newPassword"
                label={<p className="block">New Password</p>}
                dependencies={["currentPassword"]}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue("currentPassword") === value) {
                                return Promise.reject(
                                    new Error("The new password and current password do not match!")
                                );
                            }
                            return Promise.resolve();
                        },
                    }),
                ]}
                className="mb-5"
            >
                <Input.Password
                    placeholder="Enter password"
                    style={{
                        height: 48,
                        border: "1px solid #d9d9d9",
                        outline: "none",
                        boxShadow: "none",
                        backgroundColor: "white" , 
                        borderRadius: 10
                    }}
                />
            </Form.Item> 
            </ConfigProvider>


            <ConfigProvider
                theme={{
                    token: {
                        borderRadius: 0,
                    },

                }}
            >
            <Form.Item
                name="confirmPassword"
                label={<p className="block">Re-Type Password</p>}
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
                                new Error("The new password that you entered does not match!")
                            );
                        },
                    }),
                ]}
                className="mb-10"
            >
                <Input.Password
                    placeholder="Enter password"
                    style={{
                        height: 48,
                        border: "1px solid #d9d9d9",
                        outline: "none",
                        boxShadow: "none",
                        backgroundColor: "white", 
                        borderRadius: 10
                    }}
                />
            </Form.Item> 
            </ConfigProvider>

            <Form.Item className="flex items-center justify-end mt-5"> 
                    <button className="  h-[45px] bg-primary text-white lg:w-[250px] w-[150px] font-normal flex items-center justify-center rounded-lg "> {isLoading ?  "Saving..." : "Save & Change"}  </button>
                </Form.Item>
        </Form>
   
</div>
    );
};

export default ChangePassword;