/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useProfileQuery } from '@/redux/features/auth/authApi';
import { useGetCustomerProposalsQuery, useGetSellerProposalsQuery, useUpdateProposalStatusMutation } from '@/redux/features/proposalApi';
import { useCreateTransactionMutation } from '@/redux/features/transactionApi';
import { ConfigProvider, Pagination, Select, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const ProposalPage = () => {
    const [page, setPage] = useState(1)
    const limit = 10
    const { data: profile } = useProfileQuery(undefined)
    const { data: sellerProposal } = useGetSellerProposalsQuery({ page, limit })
    const { data: customerProposal } = useGetCustomerProposalsQuery({})
    const [createTransaction] = useCreateTransactionMutation()
    const [updateProposalStatus, { isSuccess, isError, data, error }] = useUpdateProposalStatusMutation()
    const userRole = profile?.role

    console.log(customerProposal);
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
    }, [isSuccess, isError, error, data]);

    const sellerData = (userRole === "CUSTOMER" ? customerProposal?.data?.proposals : sellerProposal?.data?.proposals)?.map((item: { _id: string; customer: { name: string; email: string; _id: string; }; seller: { name: string; email: string; }; price: string; business: { price: string; }; status: string; }, index: number) => ({
        key: index + 1,
        id: item?._id,
        name: item?.customer?.name || item?.seller?.name,
        email: item?.customer?.email || item?.seller?.email,
        proposalPrice: `$${item?.price}`,
        businessPrice: `$${item?.business?.price}`,
        status: item?.status,
        // proposalId: 
    }))

    const handleStatusChange = async (value: string, id: string) => {
        console.log(value, id);
        const data = {
            status: value,
            id: id
        }

        await updateProposalStatus(data)
    }

    const handleBuyNow = async (id: string) => {
        const data = {
            proposal: id
        }

        await createTransaction(data).then((res) => { console.log(res);  

            if (res?.data?.success) {
                const paymentUrl = res.data.data;
                if (paymentUrl) {
                    window.open(paymentUrl, "_blank");
                }
            }
        })

    }

    const columns = [
        { title: "S.No", dataIndex: "key", key: "key" },
        { title: `${userRole === "CUSTOMER" ? "Seller Name" : "Customer Name"}`, dataIndex: "name", key: "name" },
        { title: `${userRole === "CUSTOMER" ? "Seller Email" : "Customer Email"}`, dataIndex: "email", key: "email" },
        { title: "Proposal Price", dataIndex: "proposalPrice", key: "proposalPrice" },
        { title: "Business Price", dataIndex: "businessPrice", key: "businessPrice" },
        {
            title: "Status", dataIndex: "Status", key: "Status", render: (_: any, record: any) => (<div>
                {
                    userRole === "CUSTOMER" ?
                        <p className=' text-[#000000] font-semibold '>{
                            record?.status === "Accept" ? <button className=' px-2 py-1 bg-green-500 text-white text-[14px] rounded' onClick={() => handleBuyNow(record?.id)}> buy now  </button> : record?.status
                        }</p> : <div>  <Select defaultValue={record?.status} style={{ width: 100 }}
                            onChange={(value) => handleStatusChange(value, record?.id)}>
                            <Select.Option value="Pending">Pending</Select.Option>
                            <Select.Option value="Accept">Accept</Select.Option>
                            <Select.Option value="Reject">Reject</Select.Option>
                        </Select> </div>
                }

            </div>)
        },
    ];

    return (

        <div className=" mt-5">
            <Table dataSource={sellerData} columns={columns} style={{ border: "1px solid #E6E6E6" }} scroll={{ x: 'max-content' }} className=" rounded-lg " pagination={false} />

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
                        defaultCurrent={sellerProposal?.pagination?.page}
                        onChange={(page) => setPage(page)}
                        total={sellerProposal?.pagination?.total}
                        pageSize={sellerProposal?.pagination?.limit}
                    />
                </ConfigProvider>
            </div>

        </div>

    );
};

export default ProposalPage;