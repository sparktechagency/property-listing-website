import { Checkbox, Form, Input } from 'antd';
import React from 'react';

const DeleteAccount = () => {

    const options = [
        { label: <p className='text-[#757575] text-[20px] font-semibold'> I have a duplicate account </p>, value: 'I have a duplicate account' },
        { label: <p className='text-[#757575] text-[20px] font-semibold'> I no longer want to use Star Tech </p>, value: 'I no longer want to use Star Tech' },
        { label: <p className='text-[#757575] text-[20px] font-semibold'> Others </p>, value: 'Others' },
    ];

    return (
        <div>
            <p className='text-primary text-[40px] font-medium pb-10'>  Delete Account </p>

            <div className=' flex flex-col gap-y-4 mb-5 '>
                <p className='text-[#000000] text-[24px] font-semibold'> Account Deletion Request </p>
                <p className=' flex items-center gap-2 text-[20px] font-normal  text-[#727272] '>  - If you delete your Account, you will lose your Account’s Order History, Star Points, Saved PCs, Product Wishlist, and other Data that are related to your Account.</p>
                <p className=' flex items-center gap-2 text-[20px] font-normal  text-[#727272] '> <span> - </span> <span>Star Points and other financial assets/Data related to this Account will not be Refundable/Recoverable. </span> </p>
            </div>

            <Form layout='vertical' className=' '>

                <Form.Item name="reason" label={<div className=' text-[#000000] text-[24px] font-semibold '> Reason for Deletion </div>}>
                    <Checkbox.Group options={options} defaultValue={['Pear']} className='flex flex-col gap-y-2' />
                </Form.Item>

                <Form.Item
                    name="password"
                    label={<p className='text-[#000000] text-[24px] font-semibold'>Current password</p>}
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
                            height: 50,
                            border: "1px solid #d9d9d9",
                            outline: "none",
                            boxShadow: "none"
                        }}
                    />
                </Form.Item> 

                <Form.Item className="flex items-center justify-end mt-5"> 
                    <button className=" w-[250px] h-[50px] bg-primary text-white text-[22px] font-normal flex items-center justify-center rounded-lg "> Save & Change </button>
                </Form.Item>

            </Form>

        </div>
    );
};

export default DeleteAccount;