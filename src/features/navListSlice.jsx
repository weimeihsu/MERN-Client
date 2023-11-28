import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mainMenu:[
        {id:1, path:'/', name:'Homepage'},
        {id:2, path:'/site-domain', name:'Site List'},
        {id:3, path:'/movies', name:'Movies'},
        {id:4, path:'/movie-editor', name:'Movie Editor'},
        {id:5, path:'/online-store', name:'Online Store'},
        {id:6, path:'/store-editor', name:'Store Editor'},
    ],
    checkOutPage:[
        {id:1, path:'/checkout', name:'Checkout'},
        {id:2, path:'/checkout-success', name:'Checkout Success'},
        {id:3, path:'/checkout-failed', name:'Checkout Failed'}
    ],
    accountMenu:[
        {path:'/account', name:'Account'},
        {path:'/lougout', name:'Logout'}
    ],
    siteLevelMenu:[
        {id:1, path:'dns', name:'DNS'},
        {id:2, path:'cdn', name:'CDN Management'}
    ],
    selectedMainMenuID: null,
    siteList:[
        {id:'site123', sitename:'example.com'}, 
        {id:'site456', sitename:'travel.com'}
    ],
    domainList:[
        {id:'1', sitename:'example.com', domainname:'domain.example.com'},
        {id:'2', sitename:'example.com', domainname:'cname.example.com'},
        {id:'3', sitename:'travel.com', domainname:'domain.travel.com'},
        {id:'4', sitename:'travel.com', domainname:'cname.travel.com'}
    ],
    filteredDomainlist:[
        {id:'1', sitename:'example.com', domainname:'domain.example.com'},
        {id:'2', sitename:'example.com', domainname:'cname.example.com'},
        {id:'3', sitename:'travel.com', domainname:'domain.travel.com'},
        {id:'4', sitename:'travel.com', domainname:'cname.travel.com'}
    ],
    selectedSiteName: null,
    selectedSiteID: null,
    selectedDomainName: null
}

export const navListSlice = createSlice({
    name:'navlist',
    initialState,
    reducers:{
        getselectedSite: (state, action)=>{
            const { selectedSiteName, selectedSiteID } = action.payload
            state.selectedSiteName = selectedSiteName
            state.selectedSiteID = selectedSiteID 
        },
        getSelectedDomain: (state, action) => {
            const { selectedDomain } = action.payload
            state.selectedDomainName = selectedDomain
        },
        filter: (state, action) => {
            // const { selectedSiteName } = action.payload
            state.filteredDomainlist = [...state.domainList].filter(domain => domain.sitename === state.selectedSiteName)
        },
        initStateSiteDomain: (state, action) => {
            state.filteredDomainlist = [...state.domainList]
            state.selectedSiteName = null
        },
        getDomainArray: (state, action)=>{
            const { newArray } = state.siteList.domains
            state.rows.push(newArray)
        }
    }
})

export const { getselectedSite, filter, initStateSiteDomain, getSelectedDomain } = navListSlice.actions
export default navListSlice.reducer
