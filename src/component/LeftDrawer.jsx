import Drawer from '@mui/material/Drawer'
import MainMenu from './MainMenu'

const LeftDrawer = ({open}) => {
    return ( 
        <Drawer
        sx={{
          width: '240px',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '240px',
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
