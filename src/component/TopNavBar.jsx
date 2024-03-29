import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import CheckOutBtn from './ShoppingCart/CheckOutBtn'
import { ThemeProvider } from '@mui/material/styles';

import Logo from './Logo'

const TopNavBar = ({toggleDrawer, open}) => {
    return ( 
        <AppBar enableColorOnDark position="fixed" open={open} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} elevation={0}>
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
                </Stack>
            </Toolbar>
        </AppBar>
     );
}
 
export default TopNavBar;