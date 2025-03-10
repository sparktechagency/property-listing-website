"use client";

import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import {  PhoneOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { GrMapLocation } from 'react-icons/gr';
import TextInput from '@/components/shared/TextInput';


const { TextArea } = Input;


const GetInTouch = () => { 
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
  
    const onFinish = (values: { name: string; email: string; message: string }) => {
      setLoading(true);
      
      // Simulate form submission
      setTimeout(() => {
        console.log('Form values:', values);
        message.success('Message sent successfully!');
        form.resetFields();
        setLoading(false);
      }, 1500);
    }; 
    return (
        <div>
             <main className="container pb-[60px]">
      <div className=" mx-auto">

        
        <div className="flex flex-col md:flex-row ">
      {/* Contact Info Section */}
      <div className="  md:w-1/2 text-white flex flex-col justify-center">
        <h2 className="text-[28px] md:text-[48px] font-bold lg:mb-6 mb-3 text-[#FFBC65]">Get in Touch</h2>
        
        <div className="lg:space-y-6 space-y-5">
          <div className="flex ">
           
            <div>
              <h3 className="font-medium text-xl text-[#757575] flex items-center gap-2 pb-1"> <span> <GrMapLocation size={22} /> </span> <span>  Office address </span></h3>
              <p className=' text-[16px] text-[#000000] font-semibold'>SIA Building 77 Robinson Road #17-00, Singapore.</p>
            </div>
          </div>
          
          <div className="flex items-start">
          
            <div>
              <h3 className="font-semibold text-xl text-[#757575] flex items-center pb-1 gap-1"> 
                <span>   <ClockCircleOutlined className="lg:text-xl mt-1 " /> </span>
               <span>  Work hours</span> 
               </h3>
              <p className='text-[16px] text-[#000000] font-semibold'>09.00 Am - 06.00 PM</p>
            </div>
          </div>
          
          <div className="flex items-start">
           
            <div>
              <h3 className="font-semibold text-xl text-[#757575] pb-1 flex items-center gap-1"> <span>  <PhoneOutlined className="text-xl mt-1 " /> </span> 
              <span> Contact Number </span></h3>
              <p className='text-[16px] text-[#000000] font-semibold' >(123) 456 78970</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Form Section */}
      <div className="lg:p-8 md:w-1/2 lg;mt-0 mt-8">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="space-y-4"
        >
         <TextInput name="fullName" label="Full Name" /> 

         <TextInput name="email" label="Email" />
         {/* <TextInput name="subject" label="Subject" /> */}
          
          <Form.Item
            name="message"
            label="Your message (optional)"
          >
            <TextArea 
              placeholder="Write your message" 
              rows={4} 
              size="large" 
              style={{
              
                border: "1px solid #d9d9d9",
                outline: "none",
                boxShadow: "none",
                backgroundColor: "white",
              }}
            />
          </Form.Item>
          
          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              loading={loading}
              className=" text-base font-medium" 
              style={{
                height: 45,
             width:"100%",
                outline: "none",
                boxShadow: "none",
                backgroundColor: "#ffab3e", 
                fontWeight: "bold", 
                resize: "none",
              }}
            >
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
      </div>
    </main>
        </div>
    );
};

export default GetInTouch;