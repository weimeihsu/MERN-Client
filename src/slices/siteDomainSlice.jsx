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
    selectedSiteName: localStorage.getItem('site') ? JSON.parse(localStorage.getItem('site')) : null,
    selectedDomainName: localStorage.getItem('domain') ? JSON.parse(localStorage.getItem('domain')) : null,
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
        setSelectedSite: (state, action)=>{
            // const { selectedSiteName } = action.payload
            // state.selectedSiteName = selectedSiteName
            state.selectedSiteName = action.payload
            localStorage.setItem('site', JSON.stringify(action.payload))
        },
        setSelectedDomain: (state, action) => {
            // const { selectedDomain } = action.payload
            // state.selectedDomainName = selectedDomain
            state.selectedDomainName = action.payload
            localStorage.setItem('domain', JSON.stringify(action.payload))
        },
        clearSite: (state, action) => {
            state.selectedSiteName = null
        },
        initDomain: (state, action) => {
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

export const { filter, setSelectedSite, setSelectedDomain, clearSite } = siteDomainSlice.actions

export default siteDomainSlice.reducer