import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { backToMain } from '../features/list/navListSlice'

import Divider from '@mui/material/Divider'
import Toolbar from '@mui/material/Toolbar'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

const SiteLevelMenu = ({selectedSiteObj}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { siteLevelMenu } = useSelector(store=>store.navListSlice)
    const [ selectedID, setSelectedID ] = useState(null)
    const handlesSelected = (id) =>{
    setSelectedID(id)
    }
    const handleBackToMain = () => {
      dispatch(backToMain())
      navigate("./sitelist")
    }
    return ( 
      <>
        <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1]
            }}
          >
            <IconButton onClick={handleBackToMain}>
              <ChevronLeftIcon />
            </IconButton>
            <Typography sx={{ flexGrow: 1 }}>{selectedSiteObj.name}</Typography>
          </Toolbar>
          <Divider />

          <List>
            {siteLevelMenu.map(navitem => (
                <ListItem key={navitem.id} disablePadding>
                <ListItemButton selected={selectedID === navitem.id} onClick={()=>handlesSelected(navitem.id)}>
                  <NavLink to={`/sitelist/${selectedSiteObj.id}/${navitem.path}`}>
                    <ListItemText primary={navitem.name} />
                  </NavLink>  
                </ListItemButton>
              </ListItem>
            ))}
        </List>
      </>
        
     );
}
 
export default SiteLevelMenu;