"use client"
import React, { useState } from 'react';
import type { CSSProperties } from 'react'
import type { CollapseProps } from 'antd';
import { Collapse, ConfigProvider, Pagination, theme } from 'antd';
import { Plus } from 'lucide-react';
import { useGetFaqQuery } from '@/redux/features/faqApi';


const FAQ = () => {
    const { token } = theme.useToken();
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(5)
    const {data: faqs} = useGetFaqQuery({page, limit});

    console.log(faqs)

    const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => 
        faqs?.data?.map(( faq: {question : string, answer: string}, index: number ) => (
            {
                key: index + 1, // You may also need a dynamic key like faq.id
                label: <p className='font-sans lg:text-[20px] text-[16px] ' style={{ color: '#4E4E4E', fontWeight: 600 }}>{faq?.question}</p>,
                children: <p style={{ color: '#757575', fontSize: '16px' }}>{faq?.answer}</p>,
                style: panelStyle,
            }
        ));
    


    const panelStyle: React.CSSProperties = {
        marginBottom: 24,
        background: "#fff",
        borderRadius: token.borderRadiusLG,
    };


    return (
        <div>
          
            <div className=' pb-[60px]'> 
                <p className='text-[28px] md:text-[48px] font-semibold lg:mb-8 mb-4 text-[#000000] text-center '>Frequently Asked <span className='text-[#FFBC65]'> Question </span> </p>

                <div className=' container'>


                    <Collapse
                        bordered={false}
                        expandIcon={({ isActive }) => <Plus size={22} style={{
                            transform: `rotate(${isActive ? 0 : 270}deg)`,
                            transition: 'transform 0.3s ease',
                            color: '#FFAB3E'
                        }} />}
                        expandIconPosition="end"
                        style={{ background: "#ffffff", color: '#222222' }}
                        items={getItems(panelStyle)}
                    />

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
                            defaultCurrent={faqs?.pagination?.page}
                            onChange={(page)=> setPage(page) } 
                            total={faqs?.pagination?.total} 
                        />
                    </ConfigProvider>

                </div>
            </div>
        </div>
    );
};

export default FAQ;