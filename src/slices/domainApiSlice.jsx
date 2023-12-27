import { createSelector, createEntityAdapter } from '@reduxjs/toolkit'
import { apiSlice } from './apiSlice'
// const API_URL = '/api'
// this serves the same purpose of axios crud function
export const domainApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getDomains: builder.query({
            query: () => '/api/domains',
            // transformResponse: res=> res.data,
            providesTags:['Domains']
        }),
        // addDomain: builder.mutation({
        //     query: (domain) => ({
        //         url: `${API_URL}/domains`,
        //         method: "POST",
        //         body: domain
        //     }),
        //     invalidatesTags:['Domains']
        // }),
        // deleteDomain: builder.mutation({
        //     query: (domain) => ({
        //         url: `${API_URL}/${domain._id}`,
        //         method: "DELETE",
        //         body: _id
        //     }),
        //     invalidatesTags:['Domains']
        // }),
        // updateDomain: builder.mutation({
        //     query: (domain) => ({
        //         url: `${API_URL}/${domain._id}`,
        //         method: "PATCH",
        //         body: domain
        //     }),
        //     invalidatesTags:['Domains']
        // })
    })
})

// useLoginMutation has its naming convention
export const { useGetDomainsQuery } = domainApiSlice