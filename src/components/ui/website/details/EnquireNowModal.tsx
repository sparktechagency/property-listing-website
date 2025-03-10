import TextInput from '@/components/shared/TextInput';
import { Form, Modal } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React from 'react'; 

const EnquireNowModal = ({open , setOpen}:{open : boolean , setOpen : (open:boolean)=>void}) => { 

    const onFinish = () =>{

    }
    return (
        <Modal open={open} onCancel={() => setOpen(false)} footer={null} centered width={550}>
           <p className='text-primary  text-[32px] font-semibold text-center pb-4'> Enquire Now </p>    

           <Form layout='vertical' onFinish={onFinish} className=''>  
            <TextInput name="fullName" label="Full Name" />
            <TextInput name="email" label="Email" />
            <TextInput name="contact" label="Contact Number" /> 
            <Form.Item name="message" label={<p className="text-[#4E4E4E] text-[16px]"> Message </p>}>  
            <TextArea rows={4} placeholder="Enter your message" style={{resize: "none"}} />
                </Form.Item> 

                
                <Form.Item className="flex items-center justify-center mt-5"> 
                    <button className=" w-[250px] h-[42px] bg-primary text-white text-[18px] font-normal flex items-center justify-center rounded-lg "> Save & Change </button>
                </Form.Item> 

           </Form>
        </Modal>
    );
};

export default EnquireNowModal;