import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { initSites } from '../slices/navListSlice'

import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

const MainMenu = () => {
    const dispatch = useDispatch()
    const { mainMenu } = useSelector(store=>store.navListSlice)
    const [ selected, setSelected ] = useState('')

    const handlesSelected = (id) =>{
      setSelected(id)
      dispatch(initSites())
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