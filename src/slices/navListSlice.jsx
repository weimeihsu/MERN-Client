import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mainMenu:[
        {id:1, path:'/', name:'Homepage'},
        {id:2, path:'/site-domain', name:'Sites Domains'},
        {id:3, path:'/movies', name:'Movies'},
        {id:4, path:'/online-store', name:'Online Store'},
        
    ],
    adminMenu:[
        {id:5, path:'/movie-editor', name:'Movie Editor'},
        {id:6, path:'/store-editor', name:'Store Editor'}
    ],
    selectedPathName:'',
    checkOutPage:[
        {id:1, path:'/checkout', name:'Checkout'},
        {id:2, path:'/checkout-success', name:'Checkout Success'},
        {id:3, path:'/checkout-failed', name:'Checkout Failed'}
    ],
    siteLevelMenu:[
        {id:1, path:'dns', name:'DNS'},
        {id:2, path:'cdn', name:'CDN Management'}
    ],
    // siteList:[
    //     {_id:'site123', sitename:'example.com'}, 
    //     {_id:'site456', sitename:'travel.com'}
    // ],
    // domainList:[
    //     {_id:'1', sitename:'example.com', domainname:'domain.example.com'},
    //     {_id:'2', sitename:'example.com', domainname:'cname.example.com'},
    //     {_id:'3', sitename:'travel.com', domainname:'domain.travel.com'},
    //     {_id:'4', sitename:'travel.com', domainname:'cname.travel.com'}
    // ],
    // filteredDomains:[],
    selectedSiteName: localStorage.getItem('site') ? JSON.parse(localStorage.getItem('site')) : null,
    selectedDomainName: localStorage.getItem('domain') ? JSON.parse(localStorage.getItem('domain')) : null,
}

export const navListSlice = createSlice({
    name:'navListSlice',
    initialState,
    reducers:{
        setSelectedPathName: (state, action) => {
            state.selectedPathName = action.payload
        }
    }
})

export const { setSelectedPathName } = navListSlice.actions
export default navListSlice.reducer
