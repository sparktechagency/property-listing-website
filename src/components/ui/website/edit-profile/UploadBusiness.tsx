/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import BusinessInput from "@/components/shared/BusinessInput";
import { ConfigProvider, Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Upload } from "antd";
import { FileTextOutlined } from "@ant-design/icons";
import { useGetCategoryQuery } from "@/redux/features/categoryApi";
import { useEffect, useState } from "react";
import { IoImageOutline } from "react-icons/io5";
import { useGetBusinessQuery, useUploadBusinessListMutation } from "@/redux/features/businessListApi";
import { imageUrl } from "@/redux/base/baseApi";
import Swal from "sweetalert2";


const { Dragger } = Upload;

const UploadBusiness = () => {
  const [form] = Form.useForm();
  const { data: categoryData } = useGetCategoryQuery(undefined)
  const [imgURL, setImgURL] = useState("/imgdemo.png");
  const [imgFile, setImageFile] = useState(null);
  const [coverImages, setCoverImages] = useState<File[]>([]);
  const [documents, setDocuments] = useState<File[]>([]);
  const [uploadBusinessList, { isLoading, isError, isSuccess, error, data }] = useUploadBusinessListMutation()
  const { data: getBusinessData } = useGetBusinessQuery(undefined)

  useEffect(() => {
    if (getBusinessData) {
      form.setFieldsValue(getBusinessData);
      setImgURL(getBusinessData?.logo?.startsWith("https") ? getBusinessData?.logo : `${imageUrl}${getBusinessData?.logo}`)
    }
  }, [form, getBusinessData]);

  useEffect(() => {
    if (isSuccess) {
      if (data) {
        Swal.fire({
          text: data?.message,
          icon: "success",
          timer: 1500,
          showConfirmButton: false
        })
      }
    } 
    if (isError) {
      Swal.fire({
        //@ts-ignore
        text: error?.data?.message,
        icon: "error",
      });
    } 
  }, [isSuccess, isError, error, data,]);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setImgURL(imgUrl);
      setImageFile(file) 
    }
  };

  const handleFileUpload = (file: File, type: "cover" | "document") => {
    if (type === "cover") {
      setCoverImages((prev) => [...prev, file]);
    } else {
      setDocuments((prev) => [...prev, file]);
    }
    return false;
  };

  const uploadProps = (type: "cover" | "document") => ({
    name: "file",
    multiple: true,
    showUploadList: true,
    beforeUpload: (file: File) => handleFileUpload(file, type),
  });

  const onFinish = async (values) => {
    const formData = new FormData();

    if (coverImages) {
      coverImages.forEach((file) => {
        console.log("file", file);
        formData.append("image", file)
      })
    }

    if (documents) {
      documents.forEach((file) => formData.append("doc", file));
    }

    if (imgFile) {
      formData.append("logo", imgFile);
    }

    Object.entries(values).forEach(([key, value]) => {

      formData.append(key, value);

    }) 

    console.log(values);
   
    await uploadBusinessList(formData).then((res) => { console.log(res); })
  };

  return (
    <div >
      <Form className="w-full" layout="vertical" onFinish={onFinish} form={form}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#FFAB3E",
            },
          }}
        >
          <Form.Item name="category" >
            <Select
              placeholder="Select  Category"
              style={{ width: "100%", height: 45, }}
              options={categoryData?.map((item: { name: string, _id: string }) => ({
                value: item?._id,
                label: item?.name,
              }))}
            />
          </Form.Item>
        </ConfigProvider>

        <p className="text-xl font-semibold py-3"> Business Information </p>

        <div className=" grid lg:grid-cols-3 grid-cols-1 gap-x-8">
          <BusinessInput name="name" label="Enter your business name" />
          {/* <BusinessInput name="logo" label="Enter your business brand logo" />  */}
          <BusinessInput name="location" label="Enter your business location" />
          <BusinessInput name="email" label="Enter your business email" />
          <BusinessInput name="phone" label="Enter your contact number" />
          <BusinessInput name="website" label="Enter your website URL" />
          <BusinessInput name="socialMedia" label="Enter your social media accounts" />
          <BusinessInput name="ownership" label="Enter your ownership type" />

          <Form.Item
            name="revenue"
            rules={[
              {
                required: true,
                message: `Please enter your revenue`,
              },
            ]}
          >
            <Input
              placeholder={`Enter your revenue`}
              type="number"
              style={{
                height: 45,
                border: "1px solid #d9d9d9",
                outline: "none",
                boxShadow: "none",
                backgroundColor: "white",
              }}
            />
          </Form.Item>

          <Form.Item
            name="employees"
            rules={[
              {
                required: true,
                message: `Please enter your employees`,
              },
            ]}
          >
            <Input
              placeholder={`Enter your employees`}
              type="number"
              style={{
                height: 45,
                border: "1px solid #d9d9d9",
                outline: "none",
                boxShadow: "none",
                backgroundColor: "white",
              }}
            />

          </Form.Item>

          <BusinessInput name="founded" label="Enter your year established" /> 
          <Form.Item
            name="price"
            rules={[
              {
                required: true,
                message: `Please enter Price`,
              },
            ]}
          >
            <Input
              placeholder={`Enter Price`}
              type="number"
              style={{
                height: 45,
                border: "1px solid #d9d9d9",
                outline: "none",
                boxShadow: "none",
                backgroundColor: "white",
              }}
            />
          </Form.Item> 
        </div>

        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-x-8">

          <Form.Item name={"description"} className=" mt-5" label={<p className="text-[16px] text-gray-500 font-semibold "> Description </p>}>
            <TextArea rows={5} 
            style={{
              border: "1px solid #d9d9d9",
              outline: "none",
              boxShadow: "none",
              backgroundColor: "white",
              resize: "none"
            }} />
          </Form.Item>

          <div>
            <p className="text-[16px] text-gray-500 font-semibold pb-1">Upload Business Logo </p>
            <div className="flex  py-5 border border-gray-200 items-center justify-center rounded-lg">
              <div className="hidden">
                <input
                  onChange={onChange}
                  type="file"
                  id="img"
                  className=" hidden"
                />
              </div>
              <label
                htmlFor="img"
                className="relative w-[160px] h-[80px] cursor-pointer rounded-lg  bg-white bg-contain bg-no-repeat bg-center object-cover"
                style={{ backgroundImage: `url(${imgURL ? imgURL : <IoImageOutline size={50} />})` }}
              >
              </label>
            </div>
          </div>
        </div>

        <div className="">
          {/* Cover Images Upload */}
          <div className="h-auto mb-5">
            <Dragger {...uploadProps("cover")} min={5} className="p-6">
              <div className="flex justify-center gap-4 items-center">
                <IoImageOutline size={24} color="#757575" />
                <p className="text-[#757575] text-[22px]">Upload Cover Images</p>
              </div>
            </Dragger>
            {getBusinessData?.image?.length > 0 && (
              <div className="flex gap-4 flex-wrap mt-4">
                {getBusinessData.image.map((img: string, index: number) => (
                  <img
                    key={index}
                    src={img.startsWith("https") ? img : `${imageUrl}${img}`}
                    alt={`cover-${index}`}
                    className="w-24 h-24 object-cover rounded border"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Documents Upload */}
          <div className="h-auto mb-5">
            <Dragger {...uploadProps("document")} className="p-6">
              <div className="flex justify-center gap-4 items-center">
                <FileTextOutlined size={24} style={{ fontSize: 24, color: "#757575" }} />
                <p className="text-[#757575] text-[22px]">Upload Your Documents</p>
              </div>
            </Dragger>
            {getBusinessData?.doc?.length > 0 && (
              <div className="flex flex-col gap-2 mt-4">
                {getBusinessData.doc.map((doc: string, index: number) => (
                  <a
                    key={index}
                    href={doc.startsWith("https") ? doc : `${imageUrl}${doc}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Document {index + 1}
                  </a>
                ))}
              </div>
            )}
          </div>

        </div>


        <Form.Item className="flex items-center justify-end mt-5">
          <button className=" w-[250px] h-[45px] bg-primary text-white text-[18px] font-normal flex items-center justify-center rounded-lg "> { } {isLoading ? "Saving..." : "Save & Change"}</button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UploadBusiness;