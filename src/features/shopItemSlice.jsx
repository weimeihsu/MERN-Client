import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../axois/api'

const initialState = {
    shopItems:[],
    filteredItems:[],
    categories:[
        {name:'book', isSelected:false},
        {name:'pets', isSelected:false},
        {name:'3C', isSelected:false},
        {name:'stationery', isSelected:false}],
    status:'idle', //'idle' | 'loading' | 'succeded' | 'failed'
    error:null
} 

export const fetchShopItems = createAsyncThunk('shopItems/fetchShopItems', async()=>{
    try{
        const res = await api.get('/api/shopItems')
        return res.data // or [...res.data]
    }catch(err){
        return err.message
    }
})

export const shopItemSlice = createSlice({
    name:'shopItems',
    initialState,
    reducers:{
        filter: (state, action) => {
            const { shopItemID } = action.payload
            state.filteredItems = [...state.shopItems].filter(item => item.id === shopItemID)
        },
        addRecord: (state, action)=>{
            const { newRecord } = action.payload
            state.records = [newRecord, ...state.records]
        },
        deleteRecord: (state, action)=>{
            const { recordID } = action.payload
            state.records = state.records.filter(item => item._id !== recordID)
        },
        updateRecord: (state, action)=>{
            const { theRecord, id } = action.payload
            const recordIdx = state.records.findIndex(item => item._id === id)
            const updatedRecord = {...state.records[recordIdx], title:theRecord.title, category:theRecord.category}
            const newArry = [...state.records] //copy records array
            newArry[recordIdx] = updatedRecord
            state.records = newArry
        }
    },
    extraReducers(builder) {
        builder
        .addCase(fetchShopItems.pending, (state, action)=>{
            state.status='loading'
        })
        .addCase(fetchShopItems.fulfilled, (state, action)=>{
            state.status='succeeded'
            state.shopItems=action.payload
        })
        .addCase(fetchShopItems.rejected, (state)=>{
            state.status='failed'
            state.error='something went wrong'
        })
    }
})

export const { addRecord, deleteRecord, updateRecord, filter } = shopItemSlice.actions
// export const { selectAllRecords } = state => state.recordsState.records
// export const { getFetchStatus } = state => state.recordsState.status
// export const { getFetchError } = state => state.recordsState.error
export default shopItemSlice.reducer
