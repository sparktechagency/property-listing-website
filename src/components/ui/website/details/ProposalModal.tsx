/* eslint-disable @typescript-eslint/ban-ts-comment */

import { useCreateProposalMutation } from '@/redux/features/proposalApi';
import { Form, Input, Modal } from 'antd';
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const ProposalModal = ({ open, setOpen, id }: { open: boolean, id: string | string[], setOpen: (open: boolean) => void }) => {
    const [createProposal, { isLoading, isSuccess, error, isError, data }] = useCreateProposalMutation() 
    const [form] = Form.useForm(); 
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

    const onFinish = async (values: { price: number }) => {
        const data = {
            price: values?.price,
            business: id
        }

        await createProposal(data).then((res) => { console.log(res); })
    }
    return (
        <Modal open={open} onCancel={() => setOpen(false)} footer={null} centered width={550}>
            <p className='text-primary  text-[32px] font-semibold text-center pb-4'> Enquire Now </p>

            <Form layout='vertical' onFinish={onFinish} className='' form={form}>
                <Form.Item name="price" label={<p className="text-[#4E4E4E] text-[16px]"> Proposal Price </p>}>
                    <Input type='number' placeholder="Enter your Proposal Price" style={{ height: 45, border: "1px solid #d9d9d9", outline: "none", boxShadow: "none" }} prefix="$" />
                </Form.Item>


                <Form.Item className="flex items-center justify-center mt-5">
                    <button className=" w-[250px] h-[42px] bg-primary text-white text-[18px] font-normal flex items-center justify-center rounded-lg "> {isLoading ? "Loading..." : "Save & Change"}  </button>
                </Form.Item>

            </Form>
        </Modal>
    );
};

export default ProposalModal;