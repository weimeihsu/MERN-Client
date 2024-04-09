import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { useLogoutMutation } from '../slices/userApiSlice'
import { clearCredentials } from '../slices/authSlice'
import { setSelectedPathName } from '../slices/navListSlice'

import AccountCircle from '@mui/icons-material/AccountCircle'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const ProfileMenu = ({user}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const {pathname} = location
    const [ logoutApiCall ] = useLogoutMutation()
    const [ anchorElUser, setAnchorElUser ] = useState(null)

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
      }
    const handleCloseUserMenu = () => {
    setAnchorElUser(null)
    }

    const toProfile = () =>{
    navigate('/user-profile')
    console.log(pathname)
    dispatch(setSelectedPathName(pathname))
    setAnchorElUser(null)
    }
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
            <Button variant='outlined' startIcon={<AccountCircle />} onClick={handleOpenUserMenu} size="small" color="secondary">
            {user}
            </Button>
            <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
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