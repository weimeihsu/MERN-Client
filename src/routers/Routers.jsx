import { Routes, Route } from 'react-router-dom'
import Movies from '../pages/Movies'
import HomePage from '../pages/HomePage'
import SiteDomain from '../pages/SiteDomain'
import OnlineStore from '../pages/shoppingChart/OnlineStore'

import SiteRoutes from './SiteRoutes'
import CheckOutRoutes from './CheckOutRoutes'
import MuxVideo from '../pages/MuxVideo'


const Routers = () => {
    return (
        <Routes>
            <Route index element={<HomePage/> } />
            <Route path='site-domain' element={<SiteDomain/>}/>
            <Route path="movies" element={<Movies/> }/>
            <Route path='muxvdo' element={<MuxVideo/>}/>
            <Route path="site-domain/:siteID/*" element={<SiteRoutes/>}/>
            <Route path='online-store' element={<OnlineStore/>}/>
            <Route path='online-store/*' element={<CheckOutRoutes/>}/>
        </Routes>
    )
}

export default Routers 

