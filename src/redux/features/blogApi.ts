/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../base/baseApi"

const blogApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getBlogs: builder.query({
            query: ({ page, limit }) => {
                const params = new URLSearchParams();
                if (page) params.append("page", page)
                if (limit) params.append("limit", limit) 
                return {
                    url: `/blog`,
                }
            }, 
            transformResponse: (response: any) => response.data
        })
    })
})

export const { useGetBlogsQuery } = blogApi
 