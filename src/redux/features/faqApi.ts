/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../base/baseApi"

const faqApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getFaq: builder.query({
            query: ({ page, limit }) => {
                const params = new URLSearchParams();
                if (page) params.append("page", page)
                if (limit) params.append("limit", limit)
                return {
                    url: `/faq?${params.toString()}`,
                }
            },
        })
    })
})

export const { useGetFaqQuery } = faqApi
