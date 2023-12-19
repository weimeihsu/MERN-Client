import { apiSlice } from './apiSlice'
const DOMAIN_URL = '/api/domains'
// this serves the same purpose of axios crud function
export const domainApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getDomains: builder.mutation({
            query: (data) =>({
                url: `${DOMAIN_URL}/domains`,
                method: 'POST',
                body: data
            })
        }),
    })
})

// useLoginMutation has its naming convention
export const { useLoginMutation, useLogoutMutation } = userApiSlice 