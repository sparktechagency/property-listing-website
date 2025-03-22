/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../base/baseApi"

const enquireApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createEnquire: builder.mutation({
            query: (data) => ({
                url: `/inquiry`,
                method: "POST",
                body: data
            })
        }) , 

        getEnquires: builder.query({
            query: ({ page, limit }) => { 
                const params = new URLSearchParams();
                if (page) params.append("page", page)
                if (limit) params.append("limit", limit)
                return{

                    url: `/inquiry${params.toString()}`,
                }
            },
            transformResponse: (response: any) => response.data
        })
    })
})

export const { useCreateEnquireMutation , useGetEnquiresQuery } = enquireApi
