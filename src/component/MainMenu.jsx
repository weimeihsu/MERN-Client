import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { initState } from '../features/navListSlice'

import Divider from '@mui/material/Divider'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

const MainMenu = () => {
    const dispatch = useDispatch()
    const { mainMenu, selectedMainMenuID } = useSelector(store=>store.navListSlice)
    const [ selected, setSelected ] = useState(selectedMainMenuID)
    const handlesSelected = (id) =>{
      setSelected(id)
      dispatch(initState())
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
        
        <Divider />

        <List>
            {mainMenu.map(navitem => (
              <Link to={navitem.path} key={navitem.id}>
                <ListItem disablePadding>
                  <ListItemButton selected={selected === navitem.id} onClick={()=>handlesSelected(navitem.id)} >
                      <ListItemText primary={navitem.name} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
        </List>
      </>  
     );
}
 
export default MainMenu;