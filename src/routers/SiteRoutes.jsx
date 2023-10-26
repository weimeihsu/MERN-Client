import { Routes, Route } from "react-router-dom"

import DnsRecords from '../pages/siteLevel/DnsRecords'
import CDNmgm from '../pages/siteLevel/CDNmgm'

const SiteRoutes = () => {
    return ( 
        <Routes>
            <Route path="dns" element={<DnsRecords/>}/>
            <Route path="cdn/:domainID" element={<CDNmgm/> } />  
        </Routes>
     );
}
 
export default SiteRoutes;