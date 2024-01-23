import { apiSlice } from './apiSlice'
const API_URL = '/api/genres'

export const genreApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getGenres: builder.query({
            query:()=>`${API_URL}`,
            providesTags:['Genres']
        }),
        addGenre: builder.mutation({
            query: (genre) => ({
                url: `${API_URL}`,
                method: "POST",
                body: genre
            }),
            invalidatesTags:['Genres']
            // this tag can help clean cache and get updated data right away
        }),
    })
})

export const { useGetGenresQuery, useAddGenreMutation } = genreApiSlice