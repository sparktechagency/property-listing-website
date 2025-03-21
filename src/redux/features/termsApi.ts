/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../base/baseApi"

const termsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTerms: builder.query({
            query: () => {

                return {
                    url: `/rule/terms-and-conditions`,
                }
            }, 
            transformResponse: (response: any) => response.data
        })
    })
})

export const { useGetTermsQuery } = termsApi
