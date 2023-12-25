import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { initSites } from '../slices/navListSlice'

import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ProfileMenu from '../component/ProfileMenu'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

const MainMenu = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { mainMenu } = useSelector(store=>store.navListSlice)
    const { userInfo } = useSelector(store=>store.authSlice)
    const [ selected, setSelected ] = useState('')
    const handlesSelected = (id) =>{
      setSelected(id)
      dispatch(initSites())
    }
 
    const toProfile = () =>{
      setSelected('')
      navigate('/user-profile')
      setAnchorElUser(null)
    }
    return ( 
      <>
        <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
        </Toolbar>
        <List>
            {mainMenu.map(navitem => (
              <Link to={navitem.path} key={navitem.id}>
                <ListItem disablePadding>
                  <ListItemButton selected={ selected === navitem.id } onClick={()=>handlesSelected(navitem.id)} >
                      <ListItemText primary={navitem.name} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
        </List>
       
            {userInfo ? (<ProfileMenu user={userInfo.email} toProfile={toProfile}/>):(
              <Stack sx={{backgroundColor:'primary.light', position: 'fixed', bottom: 0, width:'240px'}} direction="row" justifyContent="center" spacing={2} divider={<Divider orientation="vertical" flexItem/>}>
                  <Link to='/signup'>
                      <Button color='secondary' fullWidth>Signup</Button>
                  </Link>
                  
                  <Link to='/login'>
                      <Button color="secondary" fullWidth>Login</Button>
                  </Link>
              </Stack>
            )}
      </>  
     );
}
 
export default MainMenu;