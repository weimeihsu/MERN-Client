import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLogoutMutation } from '../slices/userApiSlice'
import { iniMainID } from '../slices/navListSlice'
import { logOut } from '../slices/authSlice'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import { Button } from '@mui/material'

const AccountMenu = ({user}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [ logoutApiCall ] = useLogoutMutation()
    const { profileMenu } = useSelector(store=>store.navListSlice)
    const [anchorElUser, setAnchorElUser] = useState(null)

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
      }
      const handleCloseUserMenu = (event) => {
        setAnchorElUser(null)
      }
    const toProfile = ()=>{
        navigate('/user-profile')
        dispatch(iniMainID())
        setAnchorElUser(null)
    }
    const handleLogOut = async () => {
        try {
            await logoutApiCall().unwrap()
            dispatch(logOut())
            navigate('/')
        } catch(err){
            console.log(err.message)
        }
        setAnchorElUser(null)
    }
    return ( 
        <Box sx={{ flexGrow: 0 }}>
            <Button startIcon={<AccountCircle />} onClick={handleOpenUserMenu} size="medium" color="secondary">
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
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            >   
                <MenuItem onClick={toProfile} sx={{paddingRight:12 }}>
                    <ListItemText>Profile</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleLogOut} sx={{paddingRight:12 }}>
                    <ListItemText>Log Out</ListItemText>
                </MenuItem>
            </Menu>
        </Box>
     );
}
 
export default AccountMenu;