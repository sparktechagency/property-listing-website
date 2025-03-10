import { ConfigProvider, Form, Input } from "antd";

const ChangePassword = () => { 
    const [form] = Form.useForm();  

const handleChangePassword = (values:{currentPassword:string , newPassword:string , confirmPassword:string}) => {  
    console.log(values);
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
                    <button className=" lg:w-[250px] w-[150px] h-[45px] bg-primary text-white lg:w-[250px] w-[150px] font-normal flex items-center justify-center rounded-lg "> Save & Change </button>
                </Form.Item>
        </Form>
   
</div>
    );
};

export default ChangePassword;