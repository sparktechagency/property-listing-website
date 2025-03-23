/* eslint-disable @typescript-eslint/ban-ts-comment */

import { useCreateEnquireMutation } from '@/redux/features/enquireApi';
import { Form, Modal } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const EnquireNowModal = ({ open, setOpen, id }: { open: boolean, id: string | string[], setOpen: (open: boolean) => void }) => {
    const [createEnquire, { isLoading, isSuccess, error, isError, data }] = useCreateEnquireMutation() 
    const [form] = Form.useForm();  
    console.log(id);
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
                setOpen(false)
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
      }, [isSuccess, isError, error, data, form , setOpen]);  

    const onFinish = async (values: { message: string }) => {
        const data = {
            message: values?.message,
            seller: id
        }

        await createEnquire(data).then((res) => { console.log(res); })
    }
    return (
        <Modal open={open} onCancel={() => setOpen(false)} footer={null} centered width={550}>
            <p className='text-primary  text-[32px] font-semibold text-center pb-4'> Enquire Now </p>

            <Form layout='vertical' onFinish={onFinish} className='' form={form}>
                <Form.Item name="message" label={<p className="text-[#4E4E4E] text-[16px]"> Message </p>}>
                    <TextArea rows={4} placeholder="Enter your message" style={{ resize: "none" }} />
                </Form.Item>


                <Form.Item className="flex items-center justify-center mt-5">
                    <button className=" w-[250px] h-[42px] bg-primary text-white text-[18px] font-normal flex items-center justify-center rounded-lg "> {isLoading ? "Loading..." : "Save & Change"}  </button>
                </Form.Item>

            </Form>
        </Modal>
    );
};

export default EnquireNowModal;