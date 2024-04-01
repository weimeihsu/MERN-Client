import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { StyledMainBody, StyledHeaderHeight } from '../customStyle/CustomComponent'
import TopNavBar from '../component/TopNavBar'
import LeftDrawer from '../component/LeftDrawer'
import { ThemeProvider } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'
import { mainTheme } from '../mainTheme'

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

    const [open, setOpen] = useState(true)
    const toggleDrawer = () => {
    setOpen(!open);
    }

    return ( 
        <ThemeProvider theme={mainTheme}>
            <TopNavBar toggleDrawer={toggleDrawer} OptionIcon={<MenuIcon />}/>
            <LeftDrawer toggleDrawer={toggleDrawer} open={open}/>
        <StyledMainBody open={!open}>
            <StyledHeaderHeight/>
            <Outlet/>
        </StyledMainBody>
        </ThemeProvider>
     );
}
 
export default RootLayout

// sx={{paddingTop: hideMenu() ? theme.spacing(8): null}}