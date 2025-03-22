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
            query: ({page , limit}) => {  
                const params = new URLSearchParams(); 
                if (page) params.append("page", page)
                if (limit) params.append("limit", limit)
                return{
                    url: `/business/listing?${params.toString()}` ,
                }
            }, 
            transformResponse: (response: any) => response.data
        }) , 

     }) 
}) 

export const {useGetBusinessQuery , useUploadBusinessListMutation , useGetAllBusinessListQuery} = businessApi