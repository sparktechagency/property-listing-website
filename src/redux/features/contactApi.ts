/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../base/baseApi"

const contactApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        contact: builder.mutation({
            query: (data) => ({
                url: `/contact`,
                method: "POST",
                body: data
            })
        })
    })
})

export const { useContactMutation } = contactApi
