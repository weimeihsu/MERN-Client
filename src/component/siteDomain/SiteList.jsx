import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { fetchSites, getSiteName, filter, clearDomain } from '../../slices/siteDomainSlice'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

const SiteList = () => {
  const dispatch = useDispatch()
  const { sites } = useSelector(state => state.siteDomainSlice)
  const [ selected, setSelected ] = useState('')

  useEffect(()=>{
    dispatch(fetchSites())},[])
  
  const getSite = (site) =>{
    setSelected(site)
    dispatch(getSiteName({site}))
    dispatch(filter({site}))
    dispatch(clearDomain()) 
  }

    return ( 
      <>
        <Typography variant="h5">Sites</Typography>
        <List>
            {sites.map(navitem => (
                <ListItem key={navitem._id} disablePadding>
                <ListItemButton selected={selected === navitem.sitename} onClick={()=>getSite(navitem.sitename)} 
                >
                  {/* <Link to={`${navitem.id}`} > */}
                    <ListItemText primary={navitem.sitename} />
                  {/* </Link>   */}
                </ListItemButton>
              </ListItem>
            ))}
        </List>
      </>
     
     );
}
 
export default SiteList;