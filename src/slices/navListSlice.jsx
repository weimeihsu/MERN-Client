import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mainMenu:[
        {id:1, path:'/', name:'Homepage'},
        {id:2, path:'/site-domain', name:'Sites Domains'},
        {id:3, path:'/movies', name:'Movies'},
        {id:4, path:'/movie-editor', name:'Movie Editor'},
        {id:5, path:'/online-store', name:'Online Store'},
        {id:6, path:'/store-editor', name:'Store Editor'}
    ],
    selectedMainMenuName:'',
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
        // setSelectedSite: (state, action)=>{
        //     // const { selectedSiteName } = action.payload
        //     // state.selectedSiteName = selectedSiteName
        //     state.selectedSiteName = action.payload
        //     localStorage.setItem('site', JSON.stringify(action.payload))
        // },
        // setSelectedDomain: (state, action) => {
        //     // const { selectedDomain } = action.payload
        //     // state.selectedDomainName = selectedDomain
        //     state.selectedDomainName = action.payload
        //     localStorage.setItem('domain', JSON.stringify(action.payload))
        //     console.log(state.selectedDomainName)
        // },
        // filter: (state, action) => {
        //     const { site } = action.payload
        //     // const site = state.selectedSiteName.unwrap()
        //     state.filteredDomains = [...state.domainList].filter(item => item.sitename === site)
        // },
        setSelectedMainMenuName: (state, action) => {
            state.selectedMainMenuName = action.payload
        }
    }
})

export const { setSelectedMainMenuName } = navListSlice.actions
export default navListSlice.reducer
