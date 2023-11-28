import { Routes, Route } from 'react-router-dom'
import Movies from '../pages/Movies'
import HomePage from '../pages/HomePage'
import SiteDomain from '../pages/SiteDomain'
import OnlineStore from '../pages/shoppingChart/OnlineStore'
import StoreEditor from '../pages/StoreEditor'

import SiteRoutes from './SiteRoutes'
import CheckOutRoutes from './CheckOutRoutes'
import MovieEditor from '../pages/MovieEditor'


const Routers = () => {
    return (
        <Routes>
            <Route index element={<HomePage/> } />
            <Route path='site-domain' element={<SiteDomain/>}/>
            <Route path="movies" element={<Movies/> }/>
            <Route path='movie-editor' element={<MovieEditor/>}/>
            <Route path="site-domain/:siteID/*" element={<SiteRoutes/>}/>
            <Route path='online-store' element={<OnlineStore/>}/>
            <Route path='store-editor' element={<StoreEditor/>}/>
            <Route path='checkout/*' element={<CheckOutRoutes/>}/>
        </Routes>
    )
}

export default Routers 

