import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { clearCategoryTerm, clearSearchText } from '../slices/domainFilterSlice'
import { clearSelectedGenre } from '../slices/recordSlice'
import { setSelectedMainMenuName } from '../slices/navListSlice'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ProfileMenu from '../component/ProfileMenu'
import Button from '@mui/material/Button'

const MainMenu = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { mainMenu } = useSelector(store=>store.navListSlice)
    const { userInfo } = useSelector(store=>store.authSlice)
    const [ selected, setSelected ] = useState('')
    const handlesSelected = (item) =>{
      setSelected(item.id)
      dispatch(clearCategoryTerm())
      dispatch(clearSearchText())
      dispatch(clearSelectedGenre())
      dispatch(setSelectedMainMenuName(item.name))
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
                  <ListItemButton selected={ selected === navitem.id } onClick={()=>handlesSelected(navitem)} >
                      <ListItemText primary={navitem.name} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
        </List>
       
        {userInfo ? (<ProfileMenu user={userInfo.email} toProfile={toProfile}/>):(
            <Link to='/login'>
                <Button color="secondary" fullWidth variant='outlined'>Login / Signup</Button>
            </Link>
        )}
      </>  
     );
}
 
export default MainMenu;