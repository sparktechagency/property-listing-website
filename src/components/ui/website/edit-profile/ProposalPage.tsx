"use client"
import { useProfileQuery } from '@/redux/features/auth/authApi';
import { Select, Table } from 'antd';
import React from 'react';

const ProposalPage = () => { 
    const {data:profile} = useProfileQuery(undefined) 
    const userRole = profile?.role

    const data = [
        { id: 1, sNo: 1, name: "John Doe", email: "john@example.com", proposalPrice: "$38,440", businessPrice: "$38,440", description: "Software Engineer" },
        { id: 2, sNo: 2, name: "Jane Smith", email: "jane@example.com", description: "Product Manager" },
        { id: 3, sNo: 3, name: "Michael Brown", email: "michael@example.com", description: "UX Designer" },
    ];

    const columns = [
        { title: "S.No", dataIndex: "sNo", key: "sNo" },
        { title: "Name", dataIndex: "name", key: "name" },
        { title: "Email", dataIndex: "email", key: "email" },
        { title: "Proposal Price", dataIndex: "proposalPrice", key: "proposalPrice" },
        { title: "Business Price", dataIndex: "businessPrice", key: "businessPrice" },
        {
            title: "Status", dataIndex: "Status", key: "Status", render: (_, record) => (<div> 
                {
                    userRole === "CUSTOMER" ? <p className=' text-[#000000] font-semibold '>Pending</p> :  <div>  <Select defaultValue="Pending" style={{ width: 100 }}>
                    <Select.Option value="Pending">Pending</Select.Option> 
                    <Select.Option value="Accept">Accept</Select.Option> 
                    <Select.Option value="Decline">Decline</Select.Option> 
                    </Select> </div>   
                }
           
            </div>)
        },
    ];

    return (

        <div className=" mt-5">
            <Table dataSource={data} columns={columns} style={{ border: "1px solid #E6E6E6" }} scroll={{ x: 'max-content' }} className=" rounded-lg " />
        </div>

    );
};

export default ProposalPage;