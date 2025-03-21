/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../base/baseApi"

const privacyApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getPrivacy: builder.query({
            query: () => {
                return {
                    url: `/rule/privacy-policy`,
                }
            }, 
            transformResponse: (response: any) => response.data
        })
    })
})

export const { useGetPrivacyQuery } = privacyApi
