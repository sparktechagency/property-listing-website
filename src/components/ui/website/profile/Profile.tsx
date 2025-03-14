/* eslint-disable @next/next/no-img-element */
"use client"
import TextInput from "@/components/shared/TextInput";
import { Form, Input } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FiEdit3 } from "react-icons/fi";

const Profile = () => {
    const router = useRouter();
    const [form] = Form.useForm() 


    useEffect(() => {
        form.setFieldsValue({
            fullName: "Jone Doe",
            email: "dZV0O@example.com",
        });
    }, [form]);

    return (
        <div className=" container py-[60px]">

            <div className="flex items-center gap-9 ">
                <div className="flex items-center justify-center w-[110px] h-[110px] rounded-full ">
                    <img src="/user2.jpg" alt="" className="w-[110px] h-[110px] rounded-full" />
                </div>
                <div>
                    <p className=" text-[16px] font-medium text-[#757575] "> Hello !! </p>
                    <p className=" text-[24px] font-semibold text-[#000000] "> Jone Doe </p>
                </div>
            </div>

            <div className=" flex items-center justify-end mb-5 cursor-pointer" onClick={() => router.push("/edit-profile")}>
                <p className="flex items-center gap-3 justify-center h-[52px] bg-[#FFF7EC] px-5  "> <span> <FiEdit3 color="#FFAB3E" size={24} /> </span> <span className=" text-[24px] font-semibold text-primary ">  Edit profile </span> </p>
            </div>

            <Form layout="vertical" form={form}  >
                <TextInput name={"fullName"} label={"Full Name"} />
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

            </Form>

        </div>
    );
};

export default Profile;