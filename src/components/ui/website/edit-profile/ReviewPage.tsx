/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useCreateReviewMutation } from '@/redux/features/reviewApi';
import { ConfigProvider, Form, Input, Rate } from 'antd';
import React, {  useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const ReviewPage = () => { 
    const [rating , setRating] = useState<number | null>()  
    const [createReview , {isLoading , isError , isSuccess , data , error}]  = useCreateReviewMutation()  
    const [form] = Form.useForm()

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

const onFinish = async(values: { comment: string}) => { 
    const data = { 
        comment: values?.comment, 
        rating: rating
    } 
    await createReview(data).then((res) => { console.log(res); }) 

     
}
    return (
        <div>
            <div>
                <p className='text-black lg:text-[26px] text-[24px] font-medium text-center'> Give your Review </p>

                <div className=' flex items-center justify-center gap-3 my-5'>
                    <ConfigProvider
                        theme={{
                            components: {
                                Rate: {
                                    starSize: 40 , 
                                    starColor: "#ffab3e",
                                },
                            },
                        }}
                    >
                        <Rate allowHalf className='review'  onChange={(value) => setRating(value)} />
                    </ConfigProvider>
                </div>
                <Form layout='vertical' className=' flex items-center justify-center mt-4 ' onFinish={onFinish} form={form}> 
                    <div className='w-2/3 '> 

 <Form.Item className=' ' name={"comment"} rules={[{ required: true }]} > 
 <Input.TextArea rows={5} placeholder='Write your comments' style={{resize: "none"}} /> 
 </Form.Item> 

 <Form.Item className='flex justify-end' > 
    <button type='submit' className='px-12 py-2 bg-primary text-white rounded '> {isLoading ? "Submitting..." : "Submit"}  </button> 
 </Form.Item>
                    </div>
                </Form>

            </div>
        </div>
    );
};

export default ReviewPage;