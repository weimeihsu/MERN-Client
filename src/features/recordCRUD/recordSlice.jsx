import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    records:[],
    categories:['Action','Drama','Fiction','Fantasy','Animation'],
    status:'idle', //'idle' | 'loading' | 'succeded' | 'failed'
    error:null
  } 

// export const fetchRecords = createAsyncThunk('records/fetchRecords', ()=>{
//     return fetch(FETCH_URL).then(res=>res.json()).catch(err=>err.message)
// }) 

export const fetchRecords = createAsyncThunk('records/fetchRecords', async()=>{
    try{
        const res = await axios.get('/api/records')
        return res.data // or [...res.data]
    }catch(err){
        return err.message
    }
})
export const recordsSlice = createSlice({
    name:'records',
    initialState,
    reducers:{
        addRecord: (state, action)=>{
            const { newRecord } = action.payload
            state.records = [newRecord, ...state.records]
        },
        // deleteRecord: (state, action)=>{
        //     const { theRecord } = action.payload
        //     state.records = state.records.filter(item=>item._id !== theRecord._id)
        // },
        updateRecord: ()=>{
        }
    },
    extraReducers(builder) {
        builder
        .addCase(fetchRecords.pending, (state, action)=>{
            state.status='loading'
        })
        .addCase(fetchRecords.fulfilled, (state, action)=>{
            console.log(action)
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