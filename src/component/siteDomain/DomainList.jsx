import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import DeleteIcon from '@mui/icons-material/Delete'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { fetchDomains, setSelectedDomain } from '../../slices/siteDomainSlice'
import { useGetDomainsQuery } from '../../slices/domainApiSlice'
const DomainList = ({toggleSitePanel}) => {
    const { siteID } = useParams()
    const { domainID } = useParams()
    const [ newDomain, setNewDomain ] = useState('')
    const canSave = Boolean(newDomain)
    const dispatch = useDispatch()
    // const { data: domains, isLoading, isSuccess, isError, error} = useGetDOmainsQuery()
    const { filteredDomains, selectedSiteName} = useSelector(store=>store.siteDomainSlice)
    const [ selected, setSelected ] = useState('')
    
    useEffect(()=>{
      dispatch(fetchDomains())},[])

    const getDomain = (domain) => {
      setSelected(domain)
      dispatch(setSelectedDomain({domain}))
    }
    
    const changeNewDomain = (e) => {
      setNewDomain(e.target.value)
    }

    const clearInput = () =>{
      setNewDomain('')
    }

    const {
      data,
      isLoading,
      isSuccess,
      isError,
      error
    } = useGetDomainsQuery()

    let content
    if(isLoading){
      content = <Typography variant='h5'>Loading...</Typography>
    }else if(isSuccess){
      content = JSON.stringify(data)
    }else if(isError){
      content = <Typography variant='h5'>{error}</Typography>
    }

    return ( 
        <>
          <IconButton aria-label="toggle" onClick={toggleSitePanel}>
            <MenuIcon />
          </IconButton>
            <Typography variant="h5">Domains</Typography>
            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{mt:3}}>
              <Stack spacing={1} direction="row" alignItems="center" useFlexGap flexWrap="wrap">
                <TextField id="domain" label="Domain" variant="outlined" size="small" value={newDomain} onChange={changeNewDomain}/>
                <Typography variant="subtitle1" color="neutral.main">.{selectedSiteName}</Typography>
                {newDomain && <Button variant="text" disabled={!canSave} sx={{ml:2}} onClick={clearInput}>Clear</Button>}
                <Button variant="contained" disabled={!canSave} >Add</Button>
              </Stack>
            </Box>
            
            <Box>{content}</Box>
            <List color='secondary'>
              {filteredDomains.map(recordItem => (
                <Link to={`${recordItem.sitename}/${recordItem.domainname}`} key={recordItem._id}>
                  <ListItem sx={{padding:'4px 0'}}>
                  <ListItemButton
                  onClick={()=>getDomain(recordItem.domainname)}
                  selected={selected === recordItem.domainname}
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