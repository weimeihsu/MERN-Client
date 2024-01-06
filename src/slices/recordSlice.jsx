import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../axois/api'

const initialState = {
    records:[],
    categories:['Action','Drama','Fiction','Fantasy','Animation'],
    status:'idle', //'idle' | 'loading' | 'succeded' | 'failed'
    error:null
} 

export const fetchRecords = createAsyncThunk('records/fetchRecords', async()=>{
    const res = await api.get('/api/records')
    return res.data // or [...res.data]
})

export const recordsSlice = createSlice({
    name:'recordsSlice',
    initialState,
    reducers:{
        addRecord: (state, action)=>{
            const { newRecord } = action.payload
            state.records = [newRecord, ...state.records]
            // state.records.push(newRecord) the same.but push will add to the end. 
        },
        deleteRecord: (state, action)=>{
            const { recordID } = action.payload
            state.records = state.records.filter(item => item._id !== recordID)
        },
        updateRecord: (state, action)=>{
            const { theRecord, record } = action.payload
            const RecordsLeft = state.records.filter(item => item._id !== theRecord._id)
            const UpdateTheLocalRecord = {...theRecord, title:record.title, category:record.category}
            // remove the updated record before add in
            state.records = [UpdateTheLocalRecord, ...RecordsLeft]

            // const recordIdx = state.records.findIndex(item => item._id === id)
            // const updatedRecord = {...state.records[recordIdx], title:theRecord.title, category:theRecord.category}
            // const newArry = [...state.records] 
            // newArry[recordIdx] = updatedRecord
            // state.records = newArry
        }
    },
    extraReducers(builder) {
        builder
        .addCase(fetchRecords.pending, (state, action)=>{
            state.status='loading' 
        })
        .addCase(fetchRecords.fulfilled, (state, action)=>{
            state.status='succeeded'
            state.records=action.payload
        })
        .addCase(fetchRecords.rejected, (state)=>{
            state.status='failed'
            state.error='something went wrong'
        })
    }
})

// Action creators are generated for each case reducer function
export const { addRecord, deleteRecord, updateRecord } = recordsSlice.actions
// export const { selectAllRecords } = state => state.recordsState.records
// export const { getFetchStatus } = state => state.recordsState.status
// export const { getFetchError } = state => state.recordsState.error
export default recordsSlice.reducer