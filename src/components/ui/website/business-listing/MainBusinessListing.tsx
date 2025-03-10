"use client";

import React, { useState } from 'react';
import { Input, Checkbox, Select, Slider, ConfigProvider } from 'antd';
import { SearchIcon } from 'lucide-react';
import { CiBoxList } from 'react-icons/ci';
import { RxDashboard } from 'react-icons/rx';
import PropertyCard from '@/components/shared/PropertyCard'; 
import SidePropertyCard from '@/components/shared/SidePropertyCard';

const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
      title: "Equestrian  House",
      location: "Singapore City",
      revenue: "$38,440",
      area: 420,
      ownership: "Sole proprietorship",
      year: 1978
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?q=80&w=2069&auto=format&fit=crop",
      title: "Singapore  Hospital",
      location: "Singapore City",
      revenue: "$38,440",
      area: 480,
      ownership: "Partnership",
      year: 1974
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop",
      title: "Apartments",
      location: "Singapore City",
      revenue: "$38,440",
      area: 420,
      ownership: "Sole proprietorship",
      year: 1978
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
      title: "Equestrian Family ",
      location: "Singapore City",
      revenue: "$23,040",
      area: 420,
      ownership: "Sole proprietorship",
      year: 1978
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      title: "Corporate Office ",
      location: "Singapore City",
      revenue: "$22,014",
      area: 870,
      ownership: "Sole proprietorship",
      year: 1988
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
      title: "Brew & Bliss Café",
      location: "Singapore City",
      revenue: "$13,410",
      area: 420,
      ownership: "Sole proprietorship",
      year: 1978
    }
  ];

const businessTypes = [
    'All',
    'Houses',
    'Apartments',
    'Office',
    'Restaurant',
    'Cafe',
    'Firm',
];

const sortData = [
    { value: 'Newest', label: 'Newest' },
    { value: 'Best Seller', label: 'Best Seller' },
    { value: 'Best Match', label: 'Best Match' },
    { value: 'Price high', label: 'Price high' },
    { value: 'Price low', label: 'Price low' }
]

const MainBusinessListing = () => {
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [employees, setEmployees] = useState<number|string>(0);
    const [constructionYear, setConstructionYear] = useState<string>('');
    const [sidebar, setSidebar] = useState<boolean>(false);

    return (
        <div className=' container py-[60px]'>
            <div className='grid grid-cols-12 gap-8'>
                <div className='col-span-4 bg-[#F8F8F8] rounded p-5'>
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-lg font-semibold mb-2">Find your Business</h2>
                            <div className="relative">
                                <Input
                                    placeholder="What are you looking for?"
                                    className="w-full pl-10 py-2 bg-gray-50"
                                    prefix={<SearchIcon className="w-4 h-4 text-gray-400" />}
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
                                    onChange={(value) => setPriceRange(value as [number, number])}
                                /> 
                                </ConfigProvider>
                                <div className="flex gap-4">
                                    <Input
                                        prefix="$"
                                        value={priceRange[0]}
                                        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
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
                                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
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
                            <h3 className="text-sm font-medium mb-3">Business Type</h3>
                            <div className="space-y-2">
                                {businessTypes.map((type) => (
                                    <div key={type}>
                                        <Checkbox
                                            checked={selectedTypes.includes(type)}
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setSelectedTypes([...selectedTypes, type]);
                                                } else {
                                                    setSelectedTypes(selectedTypes.filter((t) => t !== type));
                                                }
                                            }}
                                        >
                                            {type}
                                        </Checkbox>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-medium mb-3">Location</h3>
                            <Select
                                className="w-full"
                                placeholder="All Citys"
                                options={[
                                    { value: 'all', label: 'All Cities' },
                                    { value: 'new-york', label: 'New York' },
                                    { value: 'london', label: 'London' },
                                    { value: 'paris', label: 'Paris' },
                                ]}
                                style={{
                                    height: "45px",
                           
                                    outline: "none",
                                    boxShadow: "none",
                                    backgroundColor: "white",
                                    borderRadius: "7px"
                                }}
                            />
                        </div>

                        <div>
                            <h3 className="text-sm font-medium mb-3">Total employees</h3>
                            <Input
                                placeholder="Enter year of Construction"
                                type='number'
                                value={employees}
                                onChange={(e) => setEmployees(e.target.value)}
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
                            <h3 className="text-sm font-medium mb-3">Year of Construction</h3>
                            <Input
                                placeholder="Enter year of Construction"
                                value={constructionYear}
                                onChange={(e) => setConstructionYear(e.target.value)}
                                style={{
                                    height: "45px",
                                    border: "1px solid #d9d9d9",
                                    outline: "none",
                                    boxShadow: "none",
                                    backgroundColor: "white",
                                }}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary text-white border-none h-12 text-base font-medium "
                            onClick={() => console.log('Applying filters')}
                        >
                            Apply Filter
                        </button>
                    </div>
                </div>

                <div className='col-span-8'>
                    <div className='flex items-center justify-between '>
                        <p className=' font-normal text-[20px] text-[#000000] '> Showing 1-8 og 25 results  </p>

                        <div className='flex items-center gap-5'>
                            <Select
                                defaultValue="sortData"
                                options={sortData}
                                style={{
                                    width: "120px",
                                    height: "35px",
                                    border: "none",
                                    outline: "none",
                                    boxShadow: "none",
                                    backgroundColor: "white",
                                }}
                            />

                            <p className={`${!sidebar ? " text-blue-800" : "text-[#757575]"} border-x-2 px-3 border-primary cursor-pointer `} onClick={() => setSidebar(!sidebar)}>  <RxDashboard size={28} />  </p>
                            <p className={`${sidebar ? " text-blue-800" : "text-[#757575]"} cursor-pointer `} onClick={() => setSidebar(!sidebar)}> <CiBoxList size={29} /> </p>
                        </div>
                    </div>


{/* cards   */}  

{ 
sidebar ? 
<div className='grid grid-cols-1 gap-8 mt-[30px]'> 
{
    properties.map((property) => (
        <SidePropertyCard key={property.id} property={property} />
    ))
}

</div> : <div className='grid grid-cols-2  gap-5 mt-[30px]'> 
{
    properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
    ))
}

</div>
}


                </div>
            </div>
        </div>
    );
};

export default MainBusinessListing;