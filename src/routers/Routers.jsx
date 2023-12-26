import { Route, createBrowserRouter,
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
import LogIn from '../pages/LogIn'
import SignUp from '../pages/SignUp'
import TryLayout from '../pages/TryLayout'
import UserProfile from '../pages/UserProfile'

const Routers = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route element={<RootLayout/>}>
                <Route index element={<HomePage/> } />
                <Route path="movies" element={<Movies/> }/>
                <Route path='movie-editor' element={<MovieEditor/>}/>
                <Route path='site-domain' element={<SiteDomainLayout/>}>
                    <Route path=':siteID'>
                        <Route path=':domainID' element={<DnsRecords/>}/>
                    </Route>
                </Route>
                <Route path='online-store' element={<OnlineStore/>}/>
                <Route path='store-editor' element={<StoreEditor/>}/>
                <Route path='try-layout' element={<TryLayout/>}/>
                <Route path="user-profile" element={<UserProfile/> }/>
            </Route>
            <Route path='checkout' element={<CheckOutLayout/>}>
                <Route index element={<CheckOut/>}/>
                <Route path="checkout-failed" element={<CheckOutFailed/> } />
                <Route path="checkout-success" element={<CheckOutSuccess/> } />  
            </Route>
            <Route path="login" element={<LogIn/> }/>
            <Route path="signup" element={<SignUp/> }/>
        </Route>
    )
)

export default Routers 

