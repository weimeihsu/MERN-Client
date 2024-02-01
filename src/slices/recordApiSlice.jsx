import { apiSlice } from './apiSlice'
const API_URL = '/api/records'

export const recordApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getRecords: builder.query({
            query: ({selectedGenreName}) => {
                if(selectedGenreName){
                    return `${API_URL}/filter/${selectedGenreName}`
                }
                return `${API_URL}`
            },
            providesTags:['Records']
        }),
        updateRecordGenre: builder.mutation({
            query: ({oldGenre, newGenre}) => ({
                url: `${API_URL}/updateRecordGenre/?oldGenre=${oldGenre}`,
                method: "PATCH",
                body: {genre:newGenre}
            }),
            invalidatesTags:['Records']
        }),
    })
})

export const { useGetRecordsQuery, useUpdateRecordGenreMutation } = recordApiSlice