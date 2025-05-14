/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from 'react';
import { Input, Select, Slider, ConfigProvider, Pagination } from 'antd';
import { SearchIcon } from 'lucide-react';
import { CiBoxList } from 'react-icons/ci';
import { RxDashboard } from 'react-icons/rx';
import PropertyCard from '@/components/shared/PropertyCard';
import SidePropertyCard from '@/components/shared/SidePropertyCard';
import { useGetAllBusinessListQuery } from '@/redux/features/businessListApi';
import { useGetCategoryQuery } from '@/redux/features/categoryApi';


const MainBusinessListing = () => {
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
    const [sidebar, setSidebar] = useState<boolean>(false);
    const [city, setCity] = useState<string>('');  
    const [minPrice , setMinPrice] = useState(0)
    const [maxPrice , setMaxPrice] = useState<number | null>() 
    const [category, setCategory] = useState<string>(''); 
    const [searchTerm, setSearchTerm] = useState('');
    const { data: categoryData } = useGetCategoryQuery(undefined)
    const [page, setPage] = useState(1)
    const limit = 8
    const { data: lists } = useGetAllBusinessListQuery({ page, limit , city , minPrice , maxPrice , category  , searchTerm})
   

    return (
        <div className='container py-10 px-4 md:px-6'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-6'>
                <div className='md:col-span-4 bg-[#F8F8F8] rounded p-5'>
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-lg font-semibold mb-2">Find your Business</h2>
                            <div className="relative">
                                <Input
                                    placeholder="What are you looking for?"
                                    className="w-full pl-10 py-2 bg-gray-50"
                                    prefix={<SearchIcon className="w-4 h-4 text-gray-400" />} 
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    style={{
                                        height: "45px",
                                        border: "1px solid #d9d9d9",
                                        outline: "none",
                                        boxShadow: "none",
                                        backgroundColor: "white",
                                    }}
                                />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-medium mb-3">Price Range</h3>
                            <div className="space-y-4">
                                <ConfigProvider
                                    theme={{
                                        token: {
                                            colorPrimary: '#FFAB3E',
                                        },
                                        components: {},
                                    }}
                                >
                                    <Slider
                                        range
                                        min={0}
                                        max={10000}
                                        value={priceRange}
                                        onChange={(value) => {setPriceRange(value as [number, number]) 
                                            setMinPrice(value[0]);
                                            setMaxPrice(value[1]);}}
                                    />
                                </ConfigProvider>
                                <div className="flex gap-4">
                                    <Input
                                        prefix="$"
                                        value={priceRange[0]}
                                        style={{
                                            height: "40px",
                                            border: "1px solid #d9d9d9",
                                            outline: "none",
                                            boxShadow: "none",
                                            backgroundColor: "white",
                                        }}
                                    />
                                    <Input
                                        prefix="$"
                                        value={priceRange[1]}                          
                                        style={{
                                            height: "40px",
                                            border: "1px solid #d9d9d9",
                                            outline: "none",
                                            boxShadow: "none",
                                            backgroundColor: "white",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-medium mb-3">Location</h3>
                            <Input
                                placeholder="Search by location"                       
                                onChange={(e) => setCity(e.target.value)}
                                style={{
                                    height: "45px",
                                    border: "1px solid #d9d9d9",
                                    outline: "none",
                                    boxShadow: "none",
                                    backgroundColor: "white",
                                }}
                            />
                        </div>

                        <div>
                            <h3 className="text-sm font-medium mb-3">Category</h3>
                            <Select
                                placeholder="Select  Category"
                                style={{ width: "100%", height: 45, }}
                                options={categoryData?.map((item: { name: string, _id: string }) => ({
                                    value: item?._id,
                                    label: item?.name,
                                }))} 
                                onChange={(value) => setCategory(value)}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary text-white border-none h-12 text-base font-medium rounded-lg"
                          
                        >
                            Apply Filter
                        </button>
                    </div>
                </div>

                <div className='md:col-span-8'>
                    <div className='flex flex-col md:flex-row items-start md:items-center justify-end gap-4'>

                        <div className='flex items-center gap-4'>
                            <Select defaultValue='Newest' options={[
                                { value: 'Newest', label: 'Newest' },
                                { value: 'Best Seller', label: 'Best Seller' },
                                { value: 'Best Match', label: 'Best Match' },
                                { value: 'Price high', label: 'Price high' },
                                { value: 'Price low', label: 'Price low' }
                            ]} className='w-32' />

                            <p className={`cursor-pointer lg:block hidden ${!sidebar ? 'text-blue-800' : 'text-gray-500'}`} onClick={() => setSidebar(!sidebar)}>  <RxDashboard size={25} />  </p>
                            <p className={`cursor-pointer lg:block hidden ${sidebar ? 'text-blue-800' : 'text-gray-500'}`} onClick={() => setSidebar(!sidebar)}> <CiBoxList size={25} /> </p>
                        </div>
                    </div>

                    <div className={`mt-6 grid ${sidebar ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'} gap-6`}>
                        {lists?.business?.map((property: any) => (
                            sidebar ? <SidePropertyCard key={property.id} property={property} /> : <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>

                    <div className='mt-6'>
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
                                defaultCurrent={lists?.pagination?.page}
                                onChange={(page) => setPage(page)}
                                total={lists?.pagination?.total}
                            />
                        </ConfigProvider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainBusinessListing;
