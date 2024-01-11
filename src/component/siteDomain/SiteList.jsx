import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { getSiteName, filter, clearDomain } from '../../slices/siteDomainSlice'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { useGetSitesQuery } from '../../slices/domainApiSlice'
import { setCategoryTerm } from '../../slices/domainFilterSlice'

const SiteList = () => {
  const dispatch = useDispatch()
  // const { selectedSite } = useSelector(state => state.domainFilterSlice)
  const [ selected, setSelected ] = useState('')

  
  const getSite = (site) =>{
    setSelected(site)
    dispatch(setCategoryTerm(site))
  }

  const { data:sites, isLoading, error } = useGetSitesQuery()

    return ( 
      <>
        <Typography variant="h5">Sites</Typography>
        {error ? (<Typography>Oh no, there was an error</Typography>
        ) : isLoading ? ( <Typography>Loading...</Typography>
        ) : sites ? (<List>{
          sites.map(item=>(
            <ListItem key={item._id} disablePadding>
              <ListItemButton selected={selected === item.sitename} onClick={()=>getSite(item.sitename)}>
                 <ListItemText primary={item.sitename} />
              </ListItemButton>
            </ListItem>
          ))}</List>) : null }
      </>
     );
}
 
export default SiteList;