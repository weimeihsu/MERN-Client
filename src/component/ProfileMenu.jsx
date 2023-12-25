import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLogoutMutation } from '../slices/userApiSlice'
import { clearCredentials } from '../slices/authSlice'

import AccountCircle from '@mui/icons-material/AccountCircle'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const ProfileMenu = ({user, toProfile}) => {
    const dispatch = useDispatch()
    
    const [ logoutApiCall ] = useLogoutMutation()
    const [ anchorElUser, setAnchorElUser ] = useState(null)

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
      }
      const handleCloseUserMenu = (event) => {
        setAnchorElUser(null)
      }
    // const toProfile = ()=>{
    //     navigate('/user-profile')
    //     selected=false
    //     setAnchorElUser(null)
    // }
    const handleLogOut = async () => {
        try {
            await logoutApiCall().unwrap()
            dispatch(clearCredentials())
            navigate('/')
        } catch(err){
            console.log(err.message)
        }
        setAnchorElUser(null)
    }
    return ( 
        <Box sx={{ padding:2 }}>
            <Button fullWidth startIcon={<AccountCircle />} onClick={handleOpenUserMenu} size="medium" color="secondary">
            {user}
            </Button>
            <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            >   
                <MenuItem onClick={toProfile} sx={{ paddingRight:4 }}>
                    <ListItemText>Profile</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleLogOut} sx={{ paddingRight:4 }}>
                    <ListItemText>Log Out</ListItemText>
                </MenuItem>
            </Menu>
        </Box>
     );
}
 
export default ProfileMenu;