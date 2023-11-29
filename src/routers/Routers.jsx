import { Routes, Route, createBrowserRouter,
    createRoutesFromElements, } from 'react-router-dom'
import RootLayout from '../layout/RootLayout'
import CheckOutLayout from '../layout/CheckOutLayout'
import SiteDomainLayout from '../layout/SiteDomainLayout'

import HomePage from '../pages/HomePage'

import OnlineStore from '../pages/shoppingChart/OnlineStore'
import StoreEditor from '../pages/shoppingChart/StoreEditor'
import DnsRecords from '../pages/siteDomain/DnsRecords'

import CheckOut from '../pages/shoppingChart/CheckOut'
import CheckOutFailed from '../pages/shoppingChart/CheckOutFailed'
import CheckOutSuccess from '../pages/shoppingChart/CheckOutSuccess'

import Movies from '../pages/Movies'
import MovieEditor from '../pages/MovieEditor'
import SignUp from '../pages/SignUp'

const Routers = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route element={<RootLayout/>}>
                <Route index element={<HomePage/> } />
                <Route path="movies" element={<Movies/> }/>
                <Route path='movie-editor' element={<MovieEditor/>}/>
                <Route path='site-domain' element={<SiteDomainLayout/>}>
                    <Route path=':siteID/:domainID' element={<DnsRecords/>}/>
                </Route>
                <Route path='online-store' element={<OnlineStore/>}/>
                <Route path='store-editor' element={<StoreEditor/>}/>
            </Route>
            <Route path='checkout' element={<CheckOutLayout/>}>
                <Route index element={<CheckOut/>}/>
                <Route path="checkout-failed" element={<CheckOutFailed/> } />
                <Route path="checkout-success" element={<CheckOutSuccess/> } />  
            </Route>
            <Route path="SignUp" element={<SignUp/> }/>
        </Route>
    )
)

export default Routers 

