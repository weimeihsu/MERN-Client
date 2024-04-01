import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import CheckOutBtn from './ShoppingCart/CheckOutBtn'
import ProfileMenu from '../component/ProfileMenu'

import Logo from './Logo'

const TopNavBar = ({toggleDrawer, open, OptionIcon, toHome, isLoginHeader}) => {
    const { userInfo } = useSelector(store=>store.authSlice)
    
    return ( 
        <AppBar position="fixed" color="transparent" open={open} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backdropFilter:"blur(80px)", borderBottom: 'solid thin', borderColor: (theme) => theme.palette.neutral.light }} elevation={0}>
            <Toolbar>
                <IconButton
                aria-label="open drawer"
                onClick={isLoginHeader ? toHome: toggleDrawer}
                edge="start"
                sx={{ mr: 2 }}
            >
                {OptionIcon}
                </IconButton>
                <Logo/>
                
                <Stack direction="row" alignItems="center" spacing={2}>
                {userInfo ? (<ProfileMenu user={userInfo.email}/>):(
                    <Link to='/auth'>
                        <Button color="secondary" variant='outlined' size='small'>Login / Signup</Button>
                    </Link>
                )}          
                  <CheckOutBtn/>
                </Stack>
            </Toolbar>
        </AppBar>
     );
}
 
export default TopNavBar;