import { apiSlice } from './apiSlice'
const USERS_URL = '/api/users'
// this serves the same purpose of axios crud function
export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) =>({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data
            }),
            invalidatesTags:['User']
        }),
        logout: builder.mutation({
            query: (data)=>({
                url:`${USERS_URL}/logout`,
                method:'POST'
            }),
            invalidatesTags:['User']
        })
    })
})

// useLoginMutation has its naming convention
export const { useLoginMutation, useLogoutMutation } = userApiSlice 