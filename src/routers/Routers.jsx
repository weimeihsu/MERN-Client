import { Routes, Route } from 'react-router-dom'
import Movies from '../pages/Movies'
import HomePage from '../pages/HomePage'
import SiteDomain from '../pages/SiteDomain'
import SiteRoutes from './SiteRoutes'
import CheckOutFailed from '../pages/shoppingChart/CheckOutFailed'
import CheckOutSuccess from '../pages/shoppingChart/CheckOutSuccess'
import OnlineStore from '../pages/shoppingChart/OnlineStore'

const Routers = () => {
    return (
        <Routes>
            <Route index element={<HomePage/> } />
            <Route path='site-domain' element={<SiteDomain/>}/>
            <Route path="movies" element={<Movies/> }/>
            <Route path="site-domain/:siteID/*" element={<SiteRoutes/>}/>
            <Route path='online-store' element={<OnlineStore/>}/>
            <Route path='checkout-success' element={<CheckOutSuccess/>}/>
            <Route path='checkout-failed' element={<CheckOutFailed/>}/>
        </Routes>
    )
}

export default Routers 

