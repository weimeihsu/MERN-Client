import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // searchTerm:'',
    categoryTerm:'',
    selectedDomain:'',
    searchText:''
}

export const domainFilterSlice = createSlice({
    name:'domainFilterSlice',
    initialState,
    reducers:{
        setSearchText: (state, action) => {
            // state.categoryTerm=''
            state.searchText = action.payload
        },
        setCategoryTerm: (state, action) => {
            // state.searchTerm='',
            state.categoryTerm = action.payload
        },
        clearCategoryTerm: (state, action)=>{
            state.categoryTerm=''
        },
        clearSearchText: (state, action) =>{
            state.searchText=''
        }
    }
})

export const {setSearchTerm, setCategoryTerm, clearCategoryTerm, clearSearchText, setSearchText} = domainFilterSlice.actions
export default domainFilterSlice.reducer