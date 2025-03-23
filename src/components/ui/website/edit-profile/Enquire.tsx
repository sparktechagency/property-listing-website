"use client"

import { useGetEnquiresQuery } from "@/redux/features/enquireApi";
import {  ConfigProvider, Pagination, Table } from "antd";
import { useState } from "react";

const Enquire = () => {   

    const [page, setPage] = useState(1)
    const limit = 10
  const {data:enquires} = useGetEnquiresQuery({page, limit}) 
  console.log("enquires", enquires); 

  const data = enquires?.inquiries?.map((item:{ _id: string; customer: { name: string; email: string; }; message: string; } , index:number) => ({
    key: index+1,
    name: item?.customer?.name,
    email: item?.customer?.email, 
    message: item?.message
  })); 


      
      const columns = [
        { title: "S.No", dataIndex: "key", key: "key" },
        { title: "Name", dataIndex: "name", key: "name" },
        { title: "Email", dataIndex: "email", key: "email" },
        { title: "Description", dataIndex: "message", key: "message" },
      ]; 

    return (
        <div className=" mt-5">
            <Table dataSource={data} columns={columns} style={{border: "1px solid #E6E6E6" }}   scroll={{ x: 'max-content' }}   className=" rounded-lg "  pagination={false }/> 

<div className=" mt-5">
        <ConfigProvider
          theme={{
            components: {
              Pagination: {
                itemActiveBg: "#FFAB3E"
              },
            },
            token: {
              colorPrimary: "#ffffff",
              colorBorder: "#FFAB3E",


            },
          }}
        >

          <Pagination
            align="center"
            defaultCurrent={enquires?.pagination?.page}
            onChange={(page) => setPage(page)}
            total={enquires?.pagination?.total} 
            pageSize={enquires?.pagination?.limit}
          />
        </ConfigProvider>
      </div> 

        </div>
    );
};

export default Enquire;