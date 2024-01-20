import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Domain from './Domain'
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
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'

import { setSearchText, clearSearchText } from '../../slices/domainFilterSlice'
import { useGetDomainsQuery, useAddDomainMutation, useDeleteDomainMutation } from '../../slices/domainApiSlice'


const DomainList = ({toggleSitePanel}) => {
    const dispatch = useDispatch()
    const [ selected, setSelected ] = useState('')
    const [ newDomain, setNewDomain ] = useState('')
    
    // const { searchTerm } = useSelector(state => state.domainFilterSlice)
    const { categoryTerm, searchText } = useSelector(state => state.domainFilterSlice)
    const [ search, setSearch ] = useState(searchText)
    
    const {
      data:domains=[],
      isLoading,
      error
    } = useGetDomainsQuery({categoryTerm})

    const filtering = domains.filter((item=>{
        return item.domainname.toLowerCase().includes(searchText)
      }))
    // console.log(filtering)

    useEffect(()=>{
      setSearch(searchText)
    }, [searchText])

    const canSave = Boolean(newDomain)
    const canAdd = Boolean(categoryTerm)

    const [ addDomain ] = useAddDomainMutation() 
    const [ deleteDomain ] = useDeleteDomainMutation() 

    const changeNewDomain = (e) => {
      setNewDomain(e.target.value)
    }  
    const changeSearchTerm =(e)=>{
      // setSearch(e.target.value)
      const value = e.target.value
      dispatch(setSearchText(value))
      // const results = domains.filter(item=>{
      //   return item.domainname.toLowerCase().includes(searchText)
      // })
      // setFiltered(results)
    }
    const getDomain = (domain) => {
      setSelected(domain)
      dispatch(clearSearchText())
    }
    const handleSubmit = (e) =>{
      e.preventDefault()
      try{
        const res = addDomain({domainname:newDomain + '.' + categoryTerm, sitename:categoryTerm}).unwrap
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
            <Stack direction="row" alignItems="center" sx={{mt:2}}>
            {categoryTerm &&
              <Stack spacing={1} direction="row" alignItems="center" useFlexGap flexWrap="wrap" sx={{flexGrow:1}}>
                <TextField id="domain" label="Domain" variant="outlined" size="small" value={newDomain} onChange={changeNewDomain} disabled={!canAdd}/>
                 <Typography variant="subtitle1" color="neutral.main">.{categoryTerm}</Typography>
                {newDomain && <Button variant="text" disabled={!canSave} sx={{ml:2}} onClick={clearInput}>Clear</Button>}
                <Button variant="contained" disabled={!canSave} type='submit' onClick={handleSubmit}>Add</Button>
              </Stack>}
              <TextField size='small'
                label="Search in domains"
                id="search-in-domains"
                variant="outlined"
                value={search}
                onChange={changeSearchTerm}
                InputProps={{
                  startAdornment: <InputAdornment position="start"><SearchIcon fontSize='small'/></InputAdornment>
                }}
              />
            </Stack>

            {/* {filtered.map(item=>(
              <p key={item._id}>{item.domainname}</p>
            ))} */}
            {error ? (
              <Typography>Oh no, there was an error</Typography>
            ) : isLoading ? (
              <Typography>Loading...</Typography>
            ) : domains ? (
              <List color='secondary' >
              {filtering.map(recordItem => (
                <Domain key={recordItem._id} recordItem={recordItem} selected={selected} getDomain={getDomain} handleDelete={handleDelete}/>
              ))}
              </List>  
            ) : null}

        </> 
     );
}
 
export default DomainList;