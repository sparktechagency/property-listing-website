/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../base/baseApi"

const categoryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({ 
        getCategory: builder.query({
            query: () => ({
                url: '/category',
            }), 
            transformResponse: (response: any) => response.data
        })
     }) 
}) 

export const {useGetCategoryQuery} = categoryApi
        