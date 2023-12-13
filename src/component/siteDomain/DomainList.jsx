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
import Typography from '@mui/material/Typography'

import { getSelectedDomain, initDomains } from '../../slices/navListSlice'

const DomainList = ({toggleSitePanel}) => {
    const dispatch = useDispatch()
    const { filteredDomains } = useSelector(store=>store.navListSlice)
    const [ selected, setSelected ] = useState('')

    useEffect(()=>{
      dispatch(initDomains())
    },[])
    const getDomain = (domainname) => {
      setSelected(domainname)
      dispatch(getSelectedDomain({selectedDomain:domainname}))
    }
    return ( 
        <>
        <IconButton aria-label="toggle" onClick={toggleSitePanel}>
         <MenuIcon />
        </IconButton>
        <Typography variant="h5">Domain Table</Typography>
          <List color='secondary'>
            {filteredDomains.map(recordItem => (
              <Link to={`${recordItem.sitename}/${recordItem.domainname}`} key={recordItem.id} onClick={() => getDomain(recordItem.domainname)}>
                <ListItem sx={{padding:'4px 0'}}>
                <ListItemButton selected={selected === recordItem.domainname}
                sx={{border: '1px solid ',
                borderColor: 'secondary.light',
                borderRadius: 1,
                '&:hover': {
                  backgroundColor: 'secondary.light',
                  color:'secondary.contrastText'
                },
                '&.Mui-selected, && .Mui-selected:hover': {
                  backgroundColor: 'secondary.light',
                  color:'secondary.contrastText',
                  '&:hover':{
                      backgroundColor: 'secondary.light',
                      color:'secondary.contrastText'
                  }
                }  
                 }}>
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