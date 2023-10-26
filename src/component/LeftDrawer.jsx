import { useSelector } from 'react-redux'
import Drawer from '@mui/material/Drawer'

import MainMenu from './MainMenu'
import SiteLevelMenu from './SiteLevelMenu'


const LeftDrawer = ({drawerWidth, open}) => {
  const { selectedSiteObj } = useSelector(store=>store.navListSlice)

    return ( 
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            '& .MuiList-padding':{
              padding:'12px'
            }
          },
          
        }}
        variant="persistent"
        anchor="left"
        open={open}>
          {selectedSiteObj ? <SiteLevelMenu selectedSiteObj={selectedSiteObj}/> :<MainMenu />}
        </Drawer>
     );
}
 
export default LeftDrawer;
