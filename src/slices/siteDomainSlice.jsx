import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../axois/api'


const initialState = {
    sites:[],
    domains:[],
    filteredDomains:[],
    fetchSitesStatus:'idle', //'idle' | 'loading' | 'succeded' | 'failed'
    fetchDomainsStatus:'idle', //'idle' | 'loading' | 'succeded' | 'failed'
    fetchSitesError: null,
    fetchDomainsError: null,
    selectedSiteName: null,
    selectedDomainName: null,
} 

export const fetchSites = createAsyncThunk('records/fetchSites', async()=>{
    const res = await api.get('/api/sites')
    return res.data // or [...res.data]
})

export const fetchDomains = createAsyncThunk('records/fetchDomains', async()=>{
    const res = await api.get('/api/domains')
    return res.data // or [...res.data]
})

export const siteDomainSlice = createSlice({
    name:'siteDomain',
    initialState,
    reducers:{
        initDomains: (state, action) => {
            state.filteredDomains = [...state.domains]
        },
        filter: (state, action) => {
            const { site } = action.payload
            // const site = state.selectedSiteName.unwrap()
            state.filteredDomains = [...state.domains].filter(item => item.sitename === site)
        },
        getSiteName: (state, action)=>{
            const { site } = action.payload
            state.selectedSiteName = site
            // state.selectedSiteName = action.payload
            // localStorage.setItem('site', JSON.stringify(action.payload))
            
        },
        setSelectedDomain: (state, action) => {
            const { domain } = action.payload
            state.selectedDomainName = domain
        },
        clearSite: (state, action) => {
            state.selectedSiteName = null
        },
        clearDomain: (state, action) => {
            state.selectedDomainName = null
        }
    },
    extraReducers(builder) {
        builder
        .addCase(fetchSites.pending, (state, action)=>{
            state.fetchSitesStatus='loading' 
        })
        .addCase(fetchSites.fulfilled, (state, action)=>{
            state.fetchSitesStatus='succeeded'
            state.sites=action.payload
        })
        .addCase(fetchSites.rejected, (state)=>{
            state.fetchSitesStatus='failed'
            state.fetchSitesError='something went wrong'
        })
        .addCase(fetchDomains.pending, (state, action)=>{
            state.fetchDomainsStatus='loading' 
        })
        .addCase(fetchDomains.fulfilled, (state, action)=>{
            state.fetchDomainsStatus='succeeded'
            state.domains=action.payload
            state.filteredDomains=action.payload
        })
        .addCase(fetchDomains.rejected, (state)=>{
            state.fetchDomainsStatus='failed'
            state.fetchDomainsError='something went wrong'
        })
    }
})

export const { filter, getSiteName, setSelectedDomain, clearSite, clearDomain } = siteDomainSlice.actions

export const selectDomainsBySite = (state, site) => state.siteDomainSlice.domains.filter(item=> item.sitename === site)

export default siteDomainSlice.reducer