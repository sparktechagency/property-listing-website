import TextInput from '@/components/shared/TextInput';
import { Form } from 'antd';
import React from 'react';

const Checkout = () => {
    return (
        <div className=' container py-[60px]'>
            <p className=' text-[36px] text-primary font-semibold text-center mb-8'> Check Out </p>

            <div className=' grid grid-cols-1 md:grid-cols-2 gap-40 items-center'>

                <div>
                    <p className=' text-[20px] text-[#0171E2] font-semibold mb-5'>Delivery Information </p>

                    <Form layout='vertical' className='' >
                        <TextInput name="fullName" label="Full Name" />
                        <TextInput name="email" label="Email" />
                        <TextInput name="contact" label="Contact Number" />
                        <TextInput name="address" label="Address" />

                    </Form>
                </div>

                <div className="col-span-1  ">
                    <p className="text-[20px] font-semibold  text-[#0171E2] mb-5">Order Summery</p>
                    <div className=" mb-28">

                        <div className="flex flex-col gap-10 gap-y-2  w-full">
                            <div className="flex items-center justify-between gap-10 "><p className="text-gray-500 font-medium">Product name  </p>  <p className="font-semibold"> Equestrian Family House</p></div>
                            <div className="flex items-center justify-between "><p className="text-gray-500 font-medium">Revenue </p><p className="font-semibold"> $38,440</p></div>
                        </div>
                    </div>

                    <div className='flex items-end justify-center'>
                    <button className=" w-2/3 h-[42px] bg-primary text-white text-[18px] font-medium flex items-center justify-center rounded-lg "> Proceed to  Pay  </button> 
                    </div>
                    <div>

                    </div>

                </div>

                <div>

                </div>
            </div>
        </div>
    );
};

export default Checkout;