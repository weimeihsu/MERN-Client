import { Routes, Route, createBrowserRouter,
    createRoutesFromElements, } from 'react-router-dom'
import RootLayout from '../layout/RootLayout'
import CheckOutLayout from '../layout/CheckOutLayout'
import SiteDomainLayout from '../layout/SiteDomainLayout'

import Movies from '../pages/Movies'
import HomePage from '../pages/HomePage'
import SiteDomain from '../pages/SiteDomain'
import OnlineStore from '../pages/shoppingChart/OnlineStore'
import StoreEditor from '../pages/StoreEditor'
import DnsRecords from '../pages/siteLevel/DnsRecords'
import CDNmgm from '../pages/siteLevel/CDNmgm'

import CheckOut from '../pages/shoppingChart/CheckOut'
import CheckOutFailed from '../pages/shoppingChart/CheckOutFailed'
import CheckOutSuccess from '../pages/shoppingChart/CheckOutSuccess'

import MovieEditor from '../pages/MovieEditor'
import SiteIdPage from '../pages/siteLevel/SiteIdPage'


// const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path="/" element={<Root />}>
//         <Route path="dashboard" element={<Dashboard />} />
//         {/* ... etc. */}
//       </Route>
//     )
//   );
const Routers = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RootLayout/>}>
            <Route index element={<HomePage/> } />
            <Route path="movies" element={<Movies/> }/>
            <Route path='movie-editor' element={<MovieEditor/>}/>
            <Route path="site-domain" element={<SiteDomainLayout/>}>
                <Route path=":siteID" element={<SiteIdPage/>}/>
            </Route>
            <Route path='online-store' element={<OnlineStore/>}/>
            <Route path='store-editor' element={<StoreEditor/>}/>
            <Route path='checkout' element={<CheckOutLayout/>}>
                <Route index element={<CheckOut/>}/>
                <Route path="checkout-failed" element={<CheckOutFailed/> } />
                <Route path="checkout-success" element={<CheckOutSuccess/> } />  
            </Route>
        </Route>
    )
)

export default Routers 

