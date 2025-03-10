"use client"
import React from 'react';

import type { CSSProperties } from 'react'
import type { CollapseProps } from 'antd';
import { Collapse, ConfigProvider, Pagination, theme } from 'antd';
import { Plus } from 'lucide-react';


const text = `
To place an order, download our app or visit our website, enter your location, and browse local restaurants. Add items to your cart, proceed to checkout, and confirm your order. We’ll take care of the rest! You’ll receive updates on your order status and can track your delivery in real-time. Enjoy fresh, delicious food delivered right to your door!
`;

const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
    {
        key: '1',
        label: <p className='font-sans lg:text-[20px] text-[16px] ' style={{ color: '#4E4E4E' , fontWeight:600 }}> How do I place an order?</p>,
        children: <p style={{ color: '#757575', fontSize: '16px' }}>{text}</p>,
        style: panelStyle,
    },
    {
        key: '2',
        label: <p className='font-sans lg:text-[20px] text-[16px] ' style={{ color: '#4E4E4E', fontWeight:600 }}> How long will my order take to arrive? </p>,
        children: <p style={{ color: '#757575', fontSize: '16px' }}>{text}</p>,
        style: panelStyle,
    },
    {
        key: '3',
        label: <p className='font-sans lg:text-[20px] text-[16px] ' style={{ color: '#4E4E4E', fontWeight:600 }}> How will I know if order is placed successfully ? </p>,
        children: <p style={{ color: '#757575', fontSize: '16px' }}>{text}</p>,
        style: panelStyle,
    },
    {
        key: '4',
        label: <p  className='font-sans lg:text-[20px] text-[16px] ' style={{ color: '#4E4E4E', fontWeight:600 }}> How do I track my order?</p>,
        children: <p style={{ color: '#757575', fontSize: '16px' }}>{text}</p>,
        style: panelStyle,
    },
    {
        key: '5',
        label: <p  className='font-sans lg:text-[20px] text-[16px] ' style={{ color: '#4E4E4E', fontWeight:600 }}> Can I cancel my order ?</p>,
        children: <p style={{ color: '#757575', fontSize: '16px' }}>{text}</p>,
        style: panelStyle,
    },


];
const FAQ = () => {
    const { token } = theme.useToken();

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

                        <Pagination align="center" defaultCurrent={1} total={50} />
                    </ConfigProvider>

                </div>
            </div>
        </div>
    );
};

export default FAQ;