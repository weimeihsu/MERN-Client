import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchTerm:'',
    categoryTerm:'',
    selectedDomain:''
}

export const domainFilterSlice = createSlice({
    name:'domainFilterSlice',
    initialState,
    reducers:{
        setSearchTerm: (state, action) => {
            // state.categoryTerm=''
            state.searchTerm = action.payload
        },
        setCategoryTerm: (state, action) => {
            // state.searchTerm='',
            state.categoryTerm = action.payload
        },
        clearCategoryTerm: (state, action)=>{
            state.categoryTerm=''
        }
    }
})

export const {setSearchTerm, setCategoryTerm, clearCategoryTerm} = domainFilterSlice.actions
export default domainFilterSlice.reducer