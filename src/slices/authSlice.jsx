import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // check if local storage has the user item, if yes than parse the user into 
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
}

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setCredentials: (state, action) =>{
            state.userInfo = action.payload
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
        },
        clearCredentials: (state, action) =>{
            state.userInfo = null
            localStorage.removeItem('userInfo')
        }
    },
})

export const { setCredentials, clearCredentials } = authSlice.actions
export default authSlice.reducer