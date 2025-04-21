/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../base/baseApi";

const businessApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({ 
        getBusiness: builder.query({
            query: () => ({
                url: '/business/details',
            }), 
            transformResponse: (response: any) => response.data
        }) , 

        uploadBusinessList: builder.mutation({
            query: (data) => {
                return{
                    url: "/business",
                    method: "POST",
                    body: data,
                }
            }
        })  , 

        getAllBusinessList: builder.query({
            query: ({page , limit , city , minPrice , maxPrice , category  , searchTerm}) => {  
                const params = new URLSearchParams(); 
                if (page) params.append("page", page)
                if (limit) params.append("limit", limit) 
                if (city) params.append("city", city) 
                if (minPrice) params.append("minPrice", minPrice) 
                if (maxPrice) params.append("maxPrice", maxPrice) 
                if (category) params.append("category", category) 
                if (searchTerm) params.append("searchTerm", searchTerm) 
                return{
                    url: `/business/listing?${params.toString()}` ,
                }
            }, 
            transformResponse: (response: any) => response.data
        }) ,  

        getBusinessById: builder.query({
            query: (id) => {
                return{
                    url: `/business/${id}` ,
                }
            }, 
            transformResponse: (response: any) => response.data
        }) , 

        getUserBusiness: builder.query({
            query: () => ({
                url: '/business/seller-business',
            }), 
            transformResponse: (response: any) => response.data
        }) , 

        deleteBusiness: builder.mutation({
            query: (id) => {
                return{
                    url: `/business/${id}` ,
                    method: "DELETE",
                }
            }, 
        })  ,

        updateBusiness: builder.mutation({
            query: ({id , data}) => {
                return{
                    url: `/business/update/${id}` ,
                    method: "PATCH",
                    body: data,
                }
            }, 
        })

     }) 
}) 

export const {useGetBusinessQuery , useUploadBusinessListMutation , useGetAllBusinessListQuery , useGetBusinessByIdQuery , useGetUserBusinessQuery , useDeleteBusinessMutation , useUpdateBusinessMutation } = businessApi