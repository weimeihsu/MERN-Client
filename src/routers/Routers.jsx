import { Routes, Route } from 'react-router-dom'
import Movies from '../pages/Movies'
import HomePage from '../pages/HomePage'
import SiteDomain from '../pages/SiteDomain'
import SiteRoutes from './SiteRoutes'


const Routers = () => {
    return (
        <Routes>
            <Route index element={<HomePage/> } />
            <Route path="site-domain" element={<SiteDomain/>}/>
            <Route path="movies" element={<Movies/> }/>
            <Route path="site-domain/:siteID/*" element={<SiteRoutes/>}/>
        </Routes>
    )
}

export default Routers 

