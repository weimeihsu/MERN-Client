import { apiSlice } from './apiSlice'
const API_URL = '/api/domains'


// this serves the same purpose of axios crud function
export const domainApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getDomains: builder.query({
            query: ({categoryTerm}) => {
                // if(searchTerm){
                //     return `${API_URL}/search?domainname=${searchTerm}`
                // }
                if(categoryTerm){
                    return `${API_URL}/${categoryTerm}`
                }
                return `${API_URL}`
                // /api/domains?limit=10
            },
            // transformResponse: res => res.data,
            providesTags:['Domains']
        }),
        // getDomains: builder.query({
        //     query: () => '/api/domains',
        //     // transformResponse: res => res.data,
        //     providesTags:['Domains']
        // }),
        addDomain: builder.mutation({
            query: (domain) => ({
                url: `${API_URL}`,
                method: "POST",
                body: domain
            }),
            invalidatesTags:['Domains']
            // this tag can help clean cache and get updated data right away
        }),
        updateDomain: builder.mutation({
            query: (domain) => ({
                url: `${API_URL}/domain/${domain._id}`,
                method: "PATCH",
                body: domain
            }),
            invalidatesTags:['Domains']
        }),
        deleteDomain: builder.mutation({
            query: ({id}) => ({
                url: `${API_URL}/domain/${id}`,
                method: "DELETE",
                body: id
            }),
            invalidatesTags:['Domains']
        }),
        getSites: builder.query({
            query: ()=>'/api/sites',
            providesTags:['Sites']
        })
    })
})

// useLoginMutation has its naming convention
export const { useGetDomainsQuery, useAddDomainMutation, useUpdateDomainMutation, useDeleteDomainMutation, useGetSitesQuery } = domainApiSlice
