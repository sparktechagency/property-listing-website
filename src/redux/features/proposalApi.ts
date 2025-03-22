
import { baseApi } from "../base/baseApi"

const proposalApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({  
        getProposals: builder.query({
            query: () => ({
                url: `/proposal`,
            })
        }),  

        createProposal: builder.mutation({
            query: (data) => ({
                url: `/proposal`,
                method: "POST",
                body: data,
            })
        }),
    }) 
}) 

export const { useCreateProposalMutation , useGetProposalsQuery } = proposalApi