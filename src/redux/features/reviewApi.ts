/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../base/baseApi"

const reviewApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getReview: builder.query({
            query: ({ page, limit }) => {
                const params = new URLSearchParams();
                if (page) params.append("page", page)
                if (limit) params.append("limit", limit)
                return {
                    url: `/review?${params.toString()}`,
                }
            },
        })
    })
})

export const { useGetReviewQuery } = reviewApi