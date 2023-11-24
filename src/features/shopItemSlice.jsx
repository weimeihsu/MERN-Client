import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../axois/api'

const initialState = {
    shopItems:[],
    shopItemsLocal:[
        {_id:'afae23', name:'Harry potter', price:100, category:'book', inventory:3},
        {_id:'2', name:'iPhone 15', price:1000, category:'3C', inventory:12},
        {_id:'afae', name:'Treats', price:120, category:'pets', inventory:0},
    ],
    currentCart:[],
    countList:[1,2,3,4,5],
    quantityInCart:null,
    subCost:30,
    totalCost:100,
    // inventoryToList:[[1,2,3],[1,2],[]],
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
// const numbers = arrayRange(1, item.inventory, 1)
// export const arrayRange = (start, stop, step) =>
//     Array.from(
//     { length: (stop - start) / step + 1 },
//     ( value, index ) => start + index * step
// )
export const shopItemSlice = createSlice({
    name:'shopItems',
    initialState,
    reducers:{
        updateTotalQty:(state)=>{
            state.quantityInCart = [...state.currentCart].reduce((n, {quantity})=> n + quantity, 0)
        },
        increment:(state, action)=>{
            const { count, id, subcost } = action.payload
            // const { theRecord, id } = action.payload
            const itemIdx = state.currentCart.findIndex(item => item._id === id)
            const updatedItem = {...state.currentCart[itemIdx], quantity:count+1, subCost:subcost}
            const newArry = [...state.currentCart] //copy records array
            newArry[itemIdx] = updatedItem
            state.currentCart = newArry

            const sum = newArry.reduce((accumulator, object) => {
                return accumulator + object.subCost;
              }, 0)
            
            state.totalCost = sum
        },
        decrement:(state, action)=>{
            const { count, id, subcost } = action.payload
            // const { theRecord, id } = action.payload
            const itemIdx = state.currentCart.findIndex(item => item._id === id)
            const updatedItem = {...state.currentCart[itemIdx], quantity:count-1, subCost:subcost}
            const newArry = [...state.currentCart] //copy records array
            newArry[itemIdx] = updatedItem
            state.currentCart = newArry   
        },
        sumCost: (state)=>{
            const newArry = [...state.currentCart]
            state.totalCost = newArry.reduce((accumulator, object) => {
                return accumulator + object.subCost;
              }, 0)
        },
        filter: (state, action) => {
            const { shopItemID } = action.payload
            state.filteredItems = [...state.shopItems].filter(item => item.id === shopItemID)
        },
        clearCart: (state, action) => {
            state.currentCart = []
        },
        addToCart: (state, action) => {
            const { shopItem } = action.payload
            const inCartId = state.currentCart.find(item=>item._id===shopItem._id)
            if(inCartId === undefined){
                state.currentCart = [...state.currentCart, shopItem]
            }else{
                state.currentCart = state.currentCart.map(
                    item => item._id === shopItem._id ?
                    {...item, quantity: item.quantity + shopItem.quantity, subCost: item.subCost+shopItem.subCost} :
                    item
                )
            }
        },
        deleteCartItem: (state, action)=>{
            const { id } = action.payload
            state.currentCart = state.currentCart.filter(item => item._id !== id)
        },
        // updateRecord: (state, action)=>{
        //     const { theRecord, id } = action.payload
        //     const recordIdx = state.records.findIndex(item => item._id === id)
        //     const updatedRecord = {...state.records[recordIdx], title:theRecord.title, category:theRecord.category}
        //     const newArry = [...state.records] //copy records array
        //     newArry[recordIdx] = updatedRecord
        //     state.records = newArry
        // }
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

export const { addToCart, filter, increment, decrement, deleteCartItem, updateTotalQty, sumCost } = shopItemSlice.actions
// export const { selectAllRecords } = state => state.recordsState.records
// export const { getFetchStatus } = state => state.recordsState.status
// export const { getFetchError } = state => state.recordsState.error
export default shopItemSlice.reducer
