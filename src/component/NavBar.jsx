import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import ProfileMenu from './ProfileMenu'
import CheckOutBtn from './CheckOutBtn'


import { styled } from '@mui/material/styles'
const drawerWidth = 240;
const Nav = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'open'
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

const NavBar = ({toggleDrawer, open}) => {
  
    return ( 
        <Nav position="fixed" open={open}>
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
                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                    Exploring
                </Typography>
                <Stack direction="row" spacing={2}>
                  <CheckOutBtn/>
                  <ProfileMenu/>
                </Stack>
            </Toolbar>
        </Nav>
     );
}
 
export default NavBar;