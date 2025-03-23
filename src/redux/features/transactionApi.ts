
import { baseApi } from "../base/baseApi"

const transactionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createTransaction: builder.mutation({
            query: (data) => {
                return {
                    url: `/transaction`, 
                    method:"POST", 
                    body: data
                }
            }, 
        })
    })
})

export const { useCreateTransactionMutation } = transactionApi
