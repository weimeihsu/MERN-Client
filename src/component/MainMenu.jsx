import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { clearCategoryTerm, clearSearchText } from '../slices/domainFilterSlice'
import { clearSelectedGenre } from '../slices/recordSlice'
import { setSelectedPathName } from '../slices/navListSlice'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'


const MainMenu = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const { pathname } = location
  
    const { mainMenu, adminMenu, selectedPathName } = useSelector(store=>store.navListSlice)
    const [ selected, setSelected ] = useState(selectedPathName)
    const { userInfo } = useSelector(store=>store.authSlice)
    
    useEffect(()=>{setSelected('123'), [pathname]})
    console.log(selected)
    const handlesSelected = (item) =>{
      console.log(pathname)
      setSelected(item.path)
      dispatch(clearCategoryTerm())
      dispatch(clearSearchText())
      dispatch(clearSelectedGenre())
      dispatch(setSelectedPathName(pathname)) 
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
                  <ListItemButton selected={ selected === navitem.path } onClick={()=>handlesSelected(navitem)} >
                      <ListItemText primary={navitem.name} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
        </List>
        {userInfo && 
        <List>
            {adminMenu.map(navitem => (
              <Link to={navitem.path} key={navitem.id}>
                <ListItem disablePadding>
                  <ListItemButton selected={ selected === navitem.id } onClick={()=>handlesSelected(navitem)} >
                      <ListItemText primary={navitem.name} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
        </List> }
      </>  
     );
}
 
export default MainMenu;