import { apiSlice } from './apiSlice'
const USERS_URL = '/api/records'
// this serves the same purpose of axios crud function
export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) =>({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data
            })
        }),
        logout: builder.mutation({
            query: (data)=>({
                url:`${USERS_URL}/logout`,
                method:'POST'
            })
        })
    })
})

// useLoginMutation has its naming convention
export const { useLoginMutation, useLogoutMutation } = userApiSlice 