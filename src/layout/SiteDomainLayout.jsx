import { Outlet, useParams } from 'react-router-dom'
import { useState } from 'react'

import Collapse from '@mui/material/Collapse'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import DomainList from '../component/siteDomain/DomainList'
import SiteList from '../component/siteDomain/SiteList'

const SiteDomainLayout = () => {
    
    const [isOpen, setIsOpen] = useState(true)
    const toggleSitePanel = () =>{
        setIsOpen(isOpen => !isOpen)
    }
    return ( 
        <Grid container
        direction="row"
        alignItems="flex-start"
        maxWidth='false'
        sx={{ my:-4}}
       >
            <Grid item >
                <Collapse in={isOpen} orientation="horizontal">
                    <Box sx={{ backgroundColor: 'primary.light', p:2 }} height="100vh"><SiteList/></Box>
                </Collapse>
            </Grid>
            <Grid item  sx={{ p:2, flexGrow:1 }} >
                <DomainList toggleSitePanel={toggleSitePanel}/>
            </Grid>
            <Grid><Outlet/></Grid>
        </Grid>
     );
}
 
export default SiteDomainLayout;