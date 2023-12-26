import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import { CssBaseline } from '@mui/material'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { fetchSites, fetchDomains } from './slices/siteDomainSlice.jsx'

store.dispatch(fetchSites())
store.dispatch(fetchDomains())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <CssBaseline />
        <App />
    </Provider>
  </React.StrictMode>
)
