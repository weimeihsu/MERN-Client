import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_REACT_APP_SERVER_URL}),
    tagTypes: ['User', 'Domains', 'Sites'],
    endpoints: (builder)=>({})
})


// export default apiSlice