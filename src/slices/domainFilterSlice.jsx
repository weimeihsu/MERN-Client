import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchTerm:'',
    categoryTerm:''
}

export const domainFilterSlice = createSlice({
    name:'domainFilterSlice',
    initialState,
    reducers:{
        setSearchTerm: (state, action) => {
            state.categoryTerm=''
            state.searchTerm = action.payload
        },
        setCategoryTerm: (state, action) => {
            state.searchTerm='',
            state.categoryTerm = action.payload
        }
    }
})

export const {setSearchTerm, setCategoryTerm} = domainFilterSlice.actions
export default domainFilterSlice.reducer