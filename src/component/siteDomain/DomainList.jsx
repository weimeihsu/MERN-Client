import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import DeleteIcon from '@mui/icons-material/Delete'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

import { fetchDomains, setSelectedDomain } from '../../slices/siteDomainSlice'
import { useGetDomainsQuery, useAddDomainMutation, useDeleteDomainMutation } from '../../slices/domainApiSlice'

const DomainList = ({toggleSitePanel}) => {
    const dispatch = useDispatch()
    const [ selected, setSelected ] = useState('')
    const [ newDomain, setNewDomain ] = useState('')
    
    const { filteredDomains, selectedSiteName } = useSelector(state=>state.siteDomainSlice)
    const canSave = Boolean(newDomain)
    const canAdd = Boolean(selectedSiteName)

    const {
      data:domains,
      isLoading,
      error
    } = useGetDomainsQuery()
    
    const [ addDomain ] = useAddDomainMutation() 
    const [ deleteDomain ] = useDeleteDomainMutation() 

    useEffect(()=>{
      dispatch(fetchDomains())},[])

    const changeNewDomain = (e) => {
      setNewDomain(e.target.value)
    }  
    const getDomain = (domain) => {
      setSelected(domain)
      dispatch(setSelectedDomain({domain}))
    }
    const handleSubmit = (e) =>{
      e.preventDefault()
      try{
        const res = addDomain({domainname:newDomain + '.' + selectedSiteName, sitename:selectedSiteName}).unwrap
        // dispatch(setCredentials({...res}))
        }catch(err){
            console.log(err?.data?.message || err.error)
        }
      setNewDomain('')
    }
    const handleDelete = (e, id) => {
      e.preventDefault()
      deleteDomain({id})
    }
    const clearInput = () =>{
      setNewDomain('')
    }

    return ( 
        <>
          <IconButton aria-label="toggle" onClick={toggleSitePanel}>
            <MenuIcon />
          </IconButton>
            <Typography variant="h5">Domains</Typography>
              <Stack spacing={1} direction="row" alignItems="center" useFlexGap flexWrap="wrap" sx={{mt:2}}>
                <TextField id="domain" label="Domain" variant="outlined" size="small" value={newDomain} onChange={changeNewDomain} disabled={!canAdd}/>
                {selectedSiteName && <Typography variant="subtitle1" color="neutral.main">.{selectedSiteName}</Typography>}
                {newDomain && <Button variant="text" disabled={!canSave} sx={{ml:2}} onClick={clearInput}>Clear</Button>}
                <Button variant="contained" disabled={!canSave} type='submit' onClick={handleSubmit}>Add</Button>
              </Stack>

            
            {error ? (
              <Typography>Oh no, there was an error</Typography>
            ) : isLoading ? (
              <Typography>Loading...</Typography>
            ) : domains ? (
              <List color='secondary' >
              {domains.map(recordItem => (
                <Link key={recordItem._id} to={`${recordItem.sitename}/${recordItem.domainname}`} >
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

                    <IconButton size="small" aria-label="delete" onClick={(e) => handleDelete(e, recordItem._id)}>
                      <DeleteIcon fontSize="inherit"/>
                    </IconButton>
                  </ListItemButton>
                  </ListItem>
                </Link>
              ))}
              </List>  
            ) : null}

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
                    
                    <IconButton size="small" aria-label="delete" >
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