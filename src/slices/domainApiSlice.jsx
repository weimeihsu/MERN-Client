import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { apiSlice } from './apiSlice'
// const API_URL = '/api'

export const domainAdapter = createEntityAdapter()
export const domainSelectors = domainAdapter.getSelectors(state=>state.domains)
export const initialState = domainAdapter.getInitialState()

const domainSlice = createSlice({
    name: 'domains',
    initialState,
    reducers: {}
})
// this serves the same purpose of axios crud function
export const domainApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getDomains: builder.query({
            query: () => '/api/domains',
            // transformResponse: res => res.data,
            providesTags:['Domains']
        }),
        // getDomainsBySite: builder.query({
        //     query: (site) => `/api/domains/${site}`,
        //     // transformResponse: res=> res.data,
        //     providesTags:['Domains']
        // }),
        addDomain: builder.mutation({
            query: (domain) => ({
                url: `/api/domains`,
                method: "POST",
                body: domain
            }),
            invalidatesTags:['Domains']
            // this tag can help clean cache and get updated data right away
        }),
        updateDomain: builder.mutation({
            query: (domain) => ({
                url: `/api/domains/${domain._id}`,
                method: "PATCH",
                body: domain
            }),
            invalidatesTags:['Domains']
        }),
        deleteDomain: builder.mutation({
            query: ({id}) => ({
                url: `/api/domains/${id}`,
                method: "DELETE",
                body: id
            }),
            invalidatesTags:['Domains']
        }),
    })
})

// useLoginMutation has its naming convention
export const { useGetDomainsQuery, useGetDomainsBySiteQuery, useAddDomainMutation, useUpdateDomainMutation, useDeleteDomainMutation } = domainApiSlice

export default domainSlice.reducer