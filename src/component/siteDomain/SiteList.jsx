import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getSelectedSite, filter } from '../../slices/navListSlice'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'


const SiteList = () => {
  const dispatch = useDispatch()
  const { siteList } = useSelector(store=>store.navListSlice)
  const [ selected, setSelected ] = useState('')
  
  // useEffect(()=>{
  //   setSelected(selectedSiteName),[]
  // })
  
  const handleSelectedSite = (site) =>{
    setSelected(site)
    dispatch(getSelectedSite({ site }))
    dispatch(filter({site})) 
  }

    return ( 
        <List>
            {siteList.map(navitem => (
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