import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import CheckOutBtn from './ShoppingCart/CheckOutBtn'
import Button from '@mui/material/Button'


import { styled } from '@mui/material/styles'
import Logo from './Logo'
// const drawerWidth = 240;
// const Nav = styled(AppBar, {
//     shouldForwardProp: (prop) => prop !== 'open'
//   })(({ theme, open }) => ({
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     ...(open && {
//       marginLeft: drawerWidth,
//       width: `calc(100% - ${drawerWidth}px)`,
//       transition: theme.transitions.create(['width', 'margin'], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//     }),
//   }));

const TopNavBar = ({toggleDrawer, open}) => {
  
    return ( 
        <AppBar position="fixed" open={open} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} elevation={0}>
            <Toolbar>
                <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                edge="start"
                sx={{ mr: 2 }}
            >
                 <MenuIcon />
                </IconButton>
                <Logo/>
                <Stack direction="row" alignItems="center" spacing={3}>
                  <CheckOutBtn/>
                  {/* <ProfileMenu/> */}
                  <Button color="inherit" href='/signup'>Signup</Button>
                  <Button color="inherit" href='/login' variant='outlined'>Login</Button>
                </Stack>
            </Toolbar>
        </AppBar>
     );
}
 
export default TopNavBar;