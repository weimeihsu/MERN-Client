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
        // setSearchTerm: (state, action) => {
        //     // state.categoryTerm=''
        //     state.searchTerm = action.payload
        // },
        setCategoryTerm: (state, action) => {
            // state.searchTerm='',
            state.categoryTerm = action.payload
        },
        clearCategoryTerm: (state, action)=>{
            state.categoryTerm=''
        },
        clearSearchText: (state, action) =>{
            state.searchText=''
            console.log('clreared')
        }
    }
})

export const {setSearchTerm, setCategoryTerm, clearCategoryTerm, clearSearchText} = domainFilterSlice.actions
export default domainFilterSlice.reducer