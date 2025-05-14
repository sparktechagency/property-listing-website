
import { baseApi } from "../base/baseApi"

const proposalApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({   

        getSellerProposals: builder.query({
            query: ({ page, limit }) => {  
                const params = new URLSearchParams();
                if (page) params.append("page", page)
                if (limit) params.append("limit", limit) 
                return {                 
                    url: `/proposal?${params.toString()}`,
                }
            }
        }),   

        getCustomerProposals: builder.query({
            query: ({ page, limit }) => {  
                const params = new URLSearchParams();
                if (page) params.append("page", page)
                if (limit) params.append("limit", limit)
                return {                 
                    url: `/proposal/customer-proposal?${params.toString()}`,
                }
            }
        }) ,

        createProposal: builder.mutation({
            query: (data) => ({
                url: `/proposal`,
                method: "POST",
                body: data,
            })
        }), 

        updateProposalStatus: builder.mutation({
            query: (data) => ({
                url: `/proposal/${data.id}`,
                method: "PATCH",
                body: data,
            })
        }),
    }) 
}) 

export const { useCreateProposalMutation , useGetCustomerProposalsQuery , useGetSellerProposalsQuery , useUpdateProposalStatusMutation } = proposalApi