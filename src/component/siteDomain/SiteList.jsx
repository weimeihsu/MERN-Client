import { useSelector, useDispatch } from 'react-redux'
import { Outlet, useParams } from 'react-router-dom'
import { useState } from 'react'
import { setSelectedSite, filter } from '../../slices/siteDomainSlice'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

const SiteList = () => {
  const dispatch = useDispatch()
  const { sites } = useSelector(store => store.siteDomainSlice)
  const [ selected, setSelected ] = useState('')
  
  // useEffect(()=>{
  //   setSelected(selectedSiteName),[]
  // })
  
  const handleSelectedSite = (site) =>{
    setSelected(site)
    dispatch(setSelectedSite({ site }))
    dispatch(filter({site})) 
  }

    return ( 
      <List>
          {sites.map(navitem => (
              <ListItem key={navitem._id} disablePadding>
              <ListItemButton selected={selected === navitem.sitename} onClick={()=>handleSelectedSite(navitem.sitename)} 
              >
                {/* <Link to={`${navitem.id}`} > */}
                  <ListItemText primary={navitem.sitename} />
                {/* </Link>   */}
              </ListItemButton>
            </ListItem>
          ))}
      </List>
     );
}
 
export default SiteList;