/* eslint-disable @next/next/no-img-element */
"use client";

import { Avatar } from "antd";
import { HomeIcon, MapPinIcon, UsersIcon, DollarSignIcon } from "lucide-react";


const propertyImages = [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  ];
const ProductDetails = () => {
    return (
        <div className='container py-[60px]'>
                <div className=''>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <p className="text-2xl font-bold mb-1">Equestrian Family House</p>
                    <p className="text-gray-500">Singapore City</p>
                </div>
                <div className="flex items-center gap-4">
                    <Avatar.Group>
                        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=male" />
                        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=female" />
                    </Avatar.Group>
                    <div className="text-right">
                        <p className="block font-semibold">Rent</p>
                        <p className="text-blue-600 font-bold text-xl">$40k</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8">
                <div className="col-span-2">
                    <img alt="Main Property Image" src={propertyImages[0]} className="h-auto w-full object-cover shadow-lg rounded-lg" />
                </div>
                <div className="col-span-2 "> 
                    <div className="grid grid-cols-2 gap-x-4"> 
                    {propertyImages.slice(1).map((image, index) => (
                        <img key={index} alt={`Property Image ${index + 2}`} src={image} className="h-auto w-full object-cover shadow-md rounded-lg" />
                    ))}

                    </div>
                </div>
            </div>

            <p className="text-xl font-bold mb-6">Overview</p>
            <div className="grid grid-cols-4 gap-4 mb-8 text-center">
                <div className="p-4 shadow-md">
                    <HomeIcon className="mx-auto mb-2 h-6 w-6 text-blue-500" />
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-500">Singapore</p>
                </div>
                <div className="p-4 shadow-md">
                    <MapPinIcon className="mx-auto mb-2 h-6 w-6 text-blue-500" />
                    <p className="font-semibold">Property Type</p>
                    <p className="text-gray-500">Sole</p>
                </div>
                <div className="p-4 shadow-md">
                    <UsersIcon className="mx-auto mb-2 h-6 w-6 text-blue-500" />
                    <p className="font-semibold">Employees</p>
                    <p className="text-gray-500">220</p>
                </div>
                <div className="p-4 shadow-md">
                    <DollarSignIcon className="mx-auto mb-2 h-6 w-6 text-blue-500" />
                    <p className="font-semibold">Revenue</p>
                    <p className="text-gray-500">$40k</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
                <div>
                    <p className="text-xl font-bold mb-6">Business Description</p>
                    <p className="text-gray-600 mb-6">
                        This 5-bed with a loft, 4-bath home in the gated community of The Hideout has it all. From the open floor plan to the abundance of light from the windows, this home is perfect for entertaining. The living room and dining room have vaulted ceilings and a beautiful fireplace. You will love spending time on the deck taking in the beautiful views. In the kitchen, you&apos;ll find stainless steel appliances and a tile backsplash, as well as a breakfast bar.
                    </p>
                </div>
                <div>
                    <p className="text-xl font-bold mb-6">Business Details</p>
                    <div className="grid grid-cols-2 gap-4">
                        <div><p className="text-gray-500">Business ID</p><p className="font-semibold">RT48</p></div>
                        <div><p className="text-gray-500">Inception</p><p className="font-semibold">1978</p></div>
                        <div><p className="text-gray-500">Revenue</p><p className="font-semibold">$17340</p></div>
                        <div><p className="text-gray-500">Business Type</p><p className="font-semibold">Houses</p></div>
                        <div><p className="text-gray-500">Total employees</p><p className="font-semibold">220</p></div>
                        <div><p className="text-gray-500">Ownership Type</p><p className="font-semibold">Sole</p></div>
                    </div>

                    <p className="text-xl font-bold mt-8 mb-6">Address</p>
                    <div className="grid gap-4">
                        <div><p className="text-gray-500">Address</p><p className="font-semibold">SIA Building 77</p></div>
                        <div><p className="text-gray-500">City</p><p className="font-semibold">Woodlands</p></div>
                        <div><p className="text-gray-500">State/County</p><p className="font-semibold">Singapore City</p></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ProductDetails;