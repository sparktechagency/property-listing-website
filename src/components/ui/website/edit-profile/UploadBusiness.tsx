import BusinessInput from "@/components/shared/BusinessInput";
import { ConfigProvider, Form, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Upload } from "antd";
import {  FileTextOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { IoImageOutline } from "react-icons/io5";

const { Dragger } = Upload;


const UploadBusiness = () => { 

        const uploadProps = {
          name: "file",
          multiple: true,
          showUploadList: true,
          beforeUpload: () => false, // Prevent automatic upload
        }; 
      

    return (
        <div >
            <Form className="w-full">
                <Form.Item name="category"  >
                    <ConfigProvider
                        theme={{
                            token: {
                                colorPrimary: "#FFAB3E",
                            },
                        }}
                    >

                        <Select
                     placeholder="Select  Category"
                            style={{ width: "100%", height: 45, }}
                            options={[
                                { value: 'category1', label: 'Category 1' },
                                { value: 'category2', label: 'Category 2' },
                                { value: 'category3', label: 'Category 3' },
                            ]}
                        />
                    </ConfigProvider>
                </Form.Item>

<p className="text-xl font-semibold py-3"> Business Information </p> 

<div className=" grid grid-cols-3 gap-x-8"> 
 <BusinessInput name="businessName" label="Enter your business name" />
 <BusinessInput name="businessLogo" label="Enter your business brand logo" /> 
 <BusinessInput name="businessLocation" label="Enter your business location" />  
 <BusinessInput name="businessEmail" label="Enter your business email" />  
 <BusinessInput name="businessContact" label="Enter your contact number" />  
 <BusinessInput name="websiteUrl" label="Enter your website URL" />  
 <BusinessInput name="socialMedia" label="Enter your social media accounts" />  
 <BusinessInput name="ownershipType" label="Enter your ownership type" />  
 <BusinessInput name="revenue" label="Enter your revenue" />  
 <BusinessInput name="numberEmployee" label="Enter your number of employees" />  
 <BusinessInput name="establishedYear" label="Enter your year established" />  
</div> 

<Form.Item className=" mt-5">  
    <TextArea rows={4} placeholder="Enter your reason for selling" style={{
            border: "1px solid #d9d9d9",
            outline: "none",
            boxShadow: "none",
            backgroundColor: "white", 
            resize: "none"
          }}  />
    </Form.Item>  

    <div className="">
      {/* Cover Images Upload */} 
      <div className="h-[150px] mb-5"> 
      <Dragger {...uploadProps} className=" p-6 " > 
        <div className="flex  justify-center gap-4 items-center"> 
        <IoImageOutline size={24} color="#757575" style={{ fontSize: 24 }} />
        <p className="text-[#757575] text-[22px]">Upload Cover Images</p>
        </div>
      </Dragger>
      </div>

      {/* Documents Upload */} 
      <div className="h-[150px] mb-5"> 
      <Dragger {...uploadProps} className=" p-6 " > 
        <div className="flex  justify-center gap-4 items-center"> 
        <FileTextOutlined size={50} color="#757575" style={{ fontSize: 24 , color: "#757575" }} />
        <p className="text-[#757575] text-[22px]">Upload Your Documents</p>
        </div>
      </Dragger>
      </div>


      {/* Video Upload */}  
      <div className="h-[150px] mb-5"> 
      <Dragger {...uploadProps} className=" p-6 " > 
        <div className="flex  justify-center gap-4 items-center"> 
        <VideoCameraOutlined size={50} color="#757575" style={{ fontSize: 24 , color: "#757575" }} />
        <p className="text-[#757575] text-[22px]">Upload Your Video</p>
        </div>
      </Dragger>   
      </div>
    </div> 

<Form.Item className=" mt-5">  
    <TextArea rows={4} placeholder="Enter your business description" style={{
            border: "1px solid #d9d9d9",
            outline: "none",
            boxShadow: "none",
            backgroundColor: "white", 
            resize: "none"
          }}  />
    </Form.Item> 

      <Form.Item className="flex items-center justify-end mt-5"> 
                        <button className=" w-[250px] h-[45px] bg-primary text-white text-[18px] font-normal flex items-center justify-center rounded-lg "> Save & Change </button>
                    </Form.Item> 
            </Form>
        </div>
    );
};

export default UploadBusiness;