import { Outlet } from "react-router-dom"
import { useState } from 'react'

import Collapse from '@mui/material/Collapse'
import Container from '@mui/material/Container'
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
       >
            <Grid item >
                <Collapse in={isOpen} orientation="horizontal">
                    <Box sx={{ backgroundColor: 'primary.light', p:2 }} height="100vh"><SiteList/></Box>
                </Collapse>
            </Grid>
            <Grid item>
                <Box sx={{ p:2 }} ><DomainList toggleSitePanel={toggleSitePanel}/></Box>
            </Grid>
            <Grid item>
                <Outlet/>
            </Grid>
            
           
           

            
        </Grid>
     );
}
 
export default SiteDomainLayout;