import Drawer from '@mui/material/Drawer'
import MainMenu from './MainMenu'

const LeftDrawer = ({drawerWidth, open}) => {
    return ( 
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            border:'none',
            boxSizing: 'border-box',
            '& .MuiList-padding':{
              padding:2
            }},
        }}
        variant="persistent"
        anchor="left"
        open={open}>
          <MainMenu/>
        </Drawer>
     );
}
 
export default LeftDrawer;
