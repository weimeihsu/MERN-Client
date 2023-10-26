import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'
import Chip from '@mui/material/Chip'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { getSelectedDomain } from '../features/list/navListSlice'

const DomainList = ({toggleSitePanel}) => {
    const dispatch = useDispatch()
    const { domainList, filteredDomainlist } = useSelector(store=>store.navListSlice)
    const getDomain = (domainname) => {
      dispatch(getSelectedDomain({selectedDomain:domainname}))
    }
    return ( 
        <>
        <IconButton aria-label="toggle" onClick={toggleSitePanel}>
         <MenuIcon />
        </IconButton>
        <h1>Domain Table</h1>
          <List>
            {filteredDomainlist.map(recordItem => (
              <Link to={`${recordItem.sitename}/cdn/${recordItem.domainname}`} key={recordItem.id} onClick={() => getDomain(recordItem.domainname)}>
                <ListItem>
                <ListItemButton sx={{border: '1px solid lightBlue',borderRadius: 1 }}>
                  <ListItemText primary={recordItem.domainname} />
                  <Chip label={recordItem.sitename} size="small" sx={{m:1}}/>
                  <IconButton size="small" aria-label="delete" onClick={() => handleRemove(recordItem.id)}>
                    <DeleteIcon fontSize="inherit"/>
                  </IconButton>
                </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>  
        </>
     );
}
 
export default DomainList;