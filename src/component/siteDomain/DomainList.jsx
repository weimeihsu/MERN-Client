import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography'

import { setSelectedDomain } from '../../slices/siteDomainSlice'
const DomainList = ({toggleSitePanel}) => {
    const { siteID } = useParams()
    const { domainID } = useParams()
    const dispatch = useDispatch()
    // const { data: domains, isLoading, isSuccess, isError, error} = useGetDOmainsQuery()
    const { filteredDomains } = useSelector(store=>store.siteDomainSlice)
    const [ selected, setSelected ] = useState('')

    const getDomain = (domain) => {
      setSelected(domain)
      dispatch(setSelectedDomain({domain}))
    }
    // let content
    // if(isLoading){
    //   content = <Typography variant='h5'>Loading...</Typography>
    // }else if(isSuccess){
    //   content=JSON.stringify(domains)
    // }else if(isError){
    //   content=<Typography variant='h5'>{error}</Typography>
    // }
    return ( 
        <>
          <IconButton aria-label="toggle" onClick={toggleSitePanel}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h5">Domain Table</Typography>
            <Typography variant="subtitle1">{siteID}</Typography>
            <Typography variant="subtitle1">{domainID}</Typography>
            <List color='secondary'>
              {filteredDomains.map(recordItem => (
                <Link to={`${recordItem.sitename}/${recordItem.domainname}`} key={recordItem._id}>
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
                    
                    <IconButton size="small" aria-label="delete" onClick={() => handleRemove(recordItem._id)}>
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