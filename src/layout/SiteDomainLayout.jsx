import { Outlet } from "react-router-dom"
import { useState } from 'react'

import Collapse from '@mui/material/Collapse'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

import DomainList from '../component/DomainList'
import SiteList from '../component/SiteList'

const SiteDomainLayout = () => {
    const [isOpen, setIsOpen] = useState(true)
    const toggleSitePanel = () =>{
        setIsOpen(isOpen => !isOpen)
    }
    return ( 
        <>
        <Container sx={{display: 'flex', flexDirection: 'row'}} disableGutters maxWidth='false'>
            <Collapse in={isOpen} orientation="horizontal">
            <Box sx={{ backgroundColor: 'primary.light', p:2 }} height="100vh"><SiteList/></Box></Collapse>
           
            {/* <Box sx={{ p:2, flexGrow: 1 }} ><DomainList toggleSitePanel={toggleSitePanel}/></Box> */}

            <Box sx={{ p:2, flexGrow: 1 }} ><Outlet/></Box>
        </Container>
        
        </>
     );
}
 
export default SiteDomainLayout;