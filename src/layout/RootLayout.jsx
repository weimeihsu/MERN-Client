import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import TopNavBar from '../component/TopNavBar'
import { CustomMain, MainHeader} from '../customStyle/CustomComponent'
import LeftDrawer from '../component/LeftDrawer'
import { ThemeProvider } from '@mui/material/styles'
import { mainTheme } from '../mainTheme'
import { styled } from '@mui/material/styles'

// const drawerWidth = 240
// const CustomMain = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })
//   (({ theme, open }) => ({
//   flexGrow: 1,
//   transition: theme.transitions.create('margin', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   marginLeft: `${drawerWidth}px`,
//   ...(open && {
//       transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginLeft: 0,
//   }),
// }));

const RootLayout = () => {
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
    setOpen(!open);
    }

    const location = useLocation()
    const hideMenu =() =>{
        const { pathname } = location
        return !pathname.includes("/checkout")
    }
    const drawerWidth = 240
    return ( 
        <ThemeProvider theme={mainTheme}>
            <TopNavBar toggleDrawer={toggleDrawer} />
            <LeftDrawer drawerWidth={drawerWidth} toggleDrawer={toggleDrawer} open={open}/>
        <CustomMain open={!open}>
            <MainHeader/>
            <Outlet/>
        </CustomMain>
        </ThemeProvider>
     );
}
 
export default RootLayout

// sx={{paddingTop: hideMenu() ? theme.spacing(8): null}}