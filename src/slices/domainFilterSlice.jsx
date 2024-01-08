import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchTerm:'',
    categoryTerm:'',
    selectedSite:''
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
        },
        initSelectedSite: (state, action) =>{
            state.selectedSite=action.payload
            console.log(state.selectedSite)
        }
    }
})

export const {setSearchTerm, setCategoryTerm, initSelectedSite} = domainFilterSlice.actions
export default domainFilterSlice.reducer