import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mainMenu:[
        {id:1, path:'/', name:'Homepage'},
        {id:2, path:'/site-domain', name:'Site List'},
        {id:3, path:'/movies', name:'Movies'},
        {id:4, path:'/movie-editor', name:'Movie Editor'},
        {id:5, path:'/online-store', name:'Online Store'},
        {id:6, path:'/store-editor', name:'Store Editor'},
        {id:7, path:'/try-layout', name:'Try Layout'}
    ],
    selectedValue:'',
    checkOutPage:[
        {id:1, path:'/checkout', name:'Checkout'},
        {id:2, path:'/checkout-success', name:'Checkout Success'},
        {id:3, path:'/checkout-failed', name:'Checkout Failed'}
    ],
    siteLevelMenu:[
        {id:1, path:'dns', name:'DNS'},
        {id:2, path:'cdn', name:'CDN Management'}
    ],
    siteList:[
        {_id:'site123', sitename:'example.com'}, 
        {_id:'site456', sitename:'travel.com'}
    ],
    domainList:[
        {_id:'1', sitename:'example.com', domainname:'domain.example.com'},
        {_id:'2', sitename:'example.com', domainname:'cname.example.com'},
        {_id:'3', sitename:'travel.com', domainname:'domain.travel.com'},
        {_id:'4', sitename:'travel.com', domainname:'cname.travel.com'}
    ],
    filteredDomains:[],
    selectedSiteName: null,
    selectedDomainName: null
}

export const navListSlice = createSlice({
    name:'navlist',
    initialState,
    reducers:{
        getSelectedSite: (state, action)=>{
            const { selectedSiteName } = action.payload
            state.selectedSiteName = selectedSiteName
            // state.selectedSiteID = selectedSiteID 
        },
        getSelectedDomain: (state, action) => {
            const { selectedDomain } = action.payload
            state.selectedDomainName = selectedDomain
        },
        filter: (state, action) => {
            // const { selectedSiteName } = action.payload
            state.filteredDomains = [...state.domainList].filter(domain => domain.sitename === state.selectedSiteName)
        },
        initValue: (state, action) => {
            state.selectedValue = ''
        },
        initDomains: (state, action) => {
            state.filteredDomains=[...state.domainList]
        },
        initSites: (state, action) => {
            state.selectedSiteName = null
        },
        getDomainArray: (state, action) => {
            const { newArray } = state.siteList.domains
            state.rows.push(newArray)
        }
    }
})

export const { getSelectedSite, filter, getSelectedDomain, initSites, initDomains } = navListSlice.actions
export default navListSlice.reducer
