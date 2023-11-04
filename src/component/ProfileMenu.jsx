import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'

const AccountMenu = () => {
    const {accountMenu} = useSelector(store=>store.navListSlice)
    const [anchorElUser, setAnchorElUser] = useState(null)

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
      }

      const handleCloseUserMenu = () => {
        setAnchorElUser(null)
      }
    return ( 
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Account">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: 'white' }} size="large">
                    <AccountCircle/>
                </IconButton>
            </Tooltip>
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
            {accountMenu.map((accountItem, idx) => (
                <NavLink to={accountItem.path} key={idx}>
                    <MenuItem onClick={handleCloseUserMenu}>
                        <ListItemText>{accountItem.name}</ListItemText>
                    </MenuItem>
                </NavLink>
            ))}
            </Menu>
        </Box>
     );
}
 
export default AccountMenu;