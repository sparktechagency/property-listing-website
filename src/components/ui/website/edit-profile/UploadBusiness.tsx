/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @next/next/no-img-element */
//@ts-nocheck
import BusinessInput from "@/components/shared/BusinessInput";
import { ConfigProvider, Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Upload } from "antd";
import { FileTextOutlined } from "@ant-design/icons";
import { useGetCategoryQuery } from "@/redux/features/categoryApi";
import { useEffect, useState } from "react";
import { IoImageOutline } from "react-icons/io5";
import { useGetBusinessByIdQuery, useUpdateBusinessMutation, useUploadBusinessListMutation } from "@/redux/features/businessListApi";
import { imageUrl } from "@/redux/base/baseApi";
import Swal from "sweetalert2";
import { GoArrowLeft } from "react-icons/go";

const { Dragger } = Upload;

const UploadBusiness = ({ businessId, onBack }: { businessId: string | null, onBack: () => void }) => {
  const [form] = Form.useForm();
  const { data: categoryData } = useGetCategoryQuery(undefined)
  const [imgURL, setImgURL] = useState("");
  const [imgFile, setImageFile] = useState<File | null>(null);
  const [coverImages, setCoverImages] = useState<File[]>([]);
  const [documents, setDocuments] = useState<File[]>([]);
  const [deletedCoverImages, setDeletedCoverImages] = useState<string[]>([]);
  const [deletedDocuments, setDeletedDocuments] = useState<string[]>([]);
  const [uploadBusinessList, { isLoading, isError, isSuccess, error, data }] = useUploadBusinessListMutation()
  const { data: getBusinessData } = useGetBusinessByIdQuery(businessId)
  const [updateBusiness] = useUpdateBusinessMutation()

  useEffect(() => {
    if (businessId) {

      if (getBusinessData) {
        form.setFieldsValue(getBusinessData);
        setImgURL(getBusinessData?.logo?.startsWith("http") ? getBusinessData?.logo : `${imageUrl}${getBusinessData?.logo}`) 
        setCoverImages(getBusinessData?.image);
        setDocuments(getBusinessData?.doc);
      }

    }
  }, [form, getBusinessData, businessId, setImgURL]);

  useEffect(() => {
    if (isSuccess) {
      if (data) {
        Swal.fire({
          text: data?.message,
          icon: "success",
          timer: 1500,
          showConfirmButton: false
        }).then(() => {
          setImageFile(null)
          setImgURL('')
          setCoverImages([])
          setDocuments([])
          setDeletedCoverImages([])
          setDeletedDocuments([])
          onBack()
          onBack()
        })
      }
    }
    if (isError) {
      Swal.fire({
        //@ts-ignore
        html: `
        <p style="margin-bottom: 10px;" > ${Array.isArray(error?.data?.errorMessages)
            ? error.data.errorMessages.map((err: { message: string }) => err.message).join('<br/>')
            : error?.data?.message
          }</p>
        <p><small style="color: red; margin-top:50px;">If you cannot resolve the error, please contact with us.</small></p>
        `,
        icon: "error",
      });
    }
  }, [isSuccess, isError, error, data, onBack]);

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
      if (coverImages.some((img) => img.name === file.name)) return false;
      setCoverImages((prev) => [...prev, file]);
    } else {
      if (documents.some((doc) => doc.name === file.name)) return false;
      setDocuments((prev) => [...prev, file]);
    }
    return false;
  };

  const handleRemoveCoverImage = (e, index, removedImage) => {
    e.preventDefault();
    e.stopPropagation();
    const updatedImages = [...coverImages];
    updatedImages.splice(index, 1);
    setCoverImages(updatedImages);

    if (typeof removedImage === 'string') {
      setDeletedCoverImages(prev => [...prev, removedImage]);
    }

  }

  const handleRemoveDocument = (e, index, removedDoc) => {
    e.preventDefault();
    e.stopPropagation();
    const updatedDocs = [...documents];
    updatedDocs.splice(index, 1);
    setDocuments(updatedDocs);

    if (typeof removedDoc === 'string') {
      setDeletedDocuments(prev => [...prev, removedDoc]);
    }

  }


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

    if (businessId) {
      if (deletedCoverImages) {
        deletedCoverImages.forEach((file) => {
          formData.append("imageToDelete[]", file)
        })
      }

      if (deletedDocuments) {
        deletedDocuments.forEach((file) => {
          formData.append("docToDelete[]", file)
        })
      }

      await updateBusiness({ id: businessId, formData }).then((res) => {
        if (res?.data?.success) {
          Swal.fire({
            text: res?.data?.message,
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            setImageFile(null)
            setImgURL('')
            setCoverImages([])
            setDocuments([])
            setDeletedCoverImages([])
            setDeletedDocuments([])
            onBack()

          });
        } else {
          Swal.fire({
            title: "Oops",
            //@ts-ignore
            text: res?.error?.data?.message,
            icon: "error",
            timer: 1500,
            showConfirmButton: false,
          });

        }
      })

    } else {

      await uploadBusinessList(formData)

    }

  };

  const OwnershipData = [
    {
      label: "Sole Proprietorship",
      value: "Sole Proprietorship"
    },
    {
      label: "Partnership",
      value: "Partnership"
    },
    {
      label: "Limited Partnership",
      value: "Limited Partnership"
    },
    {
      label: "Limited Liability Partnership",
      value: "Limited Liability Partnership"
    },
    {
      label: "Private Limited Company",
      value: "Private Limited Company"
    },
  ]

  return (
    <div >

      <div className="flex items-center gap-1 mb-4 cursor-pointer" onClick={onBack} >
        <p> <GoArrowLeft size={22} color="#5c6063" />  </p>
        <h2 className="text-2xl font-semibold text-[#5c6063]">{businessId ? 'Edit Business' : 'Add Business'}</h2>

      </div>


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
          <Form.Item
            name="socialMedia"
          >

            <Input
              placeholder={`Enter your social media accounts`}
              style={{
                height: 45,
                border: "1px solid #d9d9d9",
                outline: "none",
                boxShadow: "none",
                backgroundColor: "white",
              }}
            />

          </Form.Item>

          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#FFAB3E",
              },
            }}
          >
            <Form.Item name="ownership" >
              <Select
                placeholder="Enter your ownership type"
                style={{ width: "100%", height: 45, }}
                options={OwnershipData}
              />
            </Form.Item>
          </ConfigProvider>
          {/* <BusinessInput name="ownership" label="Enter your ownership type" />  */}

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
              placeholder={`Enter Last Annual Revenue`}
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
          <BusinessInput name="city" label="Enter your city" />
          <BusinessInput name="country" label="Enter your country" />
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
            <div className="flex py-5 border border-gray-200 items-center justify-center rounded-lg">
              <div className="hidden">
                <input
                  onChange={onChange}
                  type="file"
                  id="img"
                  className="hidden"
                />
              </div>

              <label
                htmlFor="img"
                className="relative w-[160px] h-[80px] cursor-pointer rounded-lg bg-white bg-contain bg-no-repeat bg-center object-cover" >

                <img src={imgURL} alt="" className={` ${imgURL && " w-[120px] h-20 object-contain "} `} />

                {!imgURL && (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <IoImageOutline size={30} />
                  </div>
                )}

              </label>
            </div>
          </div>
        </div>

        <div className="">
          {/* Cover Images Upload */}
          <div className="h-auto mb-5  mt-5 lg:mt-0">
            <Dragger {...uploadProps("cover")} min={5} className="p-6 business-add">
              <div className="flex justify-center gap-4 items-center">
                <IoImageOutline size={24} color="#757575" />
                <p className="text-[#757575] text-[22px]">Upload Cover Images</p>
              </div>
            </Dragger>
            <div className="grid grid-cols-3 gap-3 mb-4 mt-4">
              {coverImages?.map((img, index) => {
                if (!img) return null;
                const imageSrc = typeof img === "string" ? `${imageUrl}${img}` : URL.createObjectURL(img);
                return (
                  <div key={index} className="relative">
                    <img src={imageSrc} alt="cover" className="w-full h-32 object-cover rounded" />
                    <button
                      onClick={(e) => handleRemoveCoverImage(e, index, img)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                    >
                      ✕
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Documents Upload */}
          <div className="h-auto my-5">
            <Dragger {...uploadProps("document")} className="p-6 business-add">
              <div className="flex justify-center gap-4 items-center">
                <FileTextOutlined size={24} style={{ fontSize: 24, color: "#757575" }} />
                <p className="text-[#757575] text-[22px]">Upload Your Documents</p>
              </div>
            </Dragger>

            <div className="grid grid-cols-2 gap-3 my-4">
              {documents?.map((doc, index) => {
                const isURL = typeof doc === "string";
                const fileURL = isURL ? `${imageUrl}${doc}` : URL.createObjectURL(doc);
                const fileName = isURL ? doc.split("/").pop() : doc.name;

                return (
                  <div key={index} className="flex items-center gap-3 border p-2 rounded relative">
                    <FileTextOutlined style={{ fontSize: "24px", color: "#757575" }} />
                    <a href={fileURL} target="_blank" rel="noreferrer" className="text-blue-500 truncate">
                      {fileName}
                    </a>
                    <button
                      onClick={(e) => {
                        handleRemoveDocument(e, index, doc);
                      }}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                    >
                      ✕
                    </button>
                  </div>
                );
              })}
            </div>

          </div>

        </div>


        <Form.Item className="flex items-center justify-end mt-5">
          <button disabled={isLoading} type="submit" className=" w-[250px] h-[45px] bg-primary text-white text-[18px] font-normal flex items-center justify-center rounded-lg ">  {isLoading ? "Saving..." : "Save & Change"}</button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UploadBusiness;