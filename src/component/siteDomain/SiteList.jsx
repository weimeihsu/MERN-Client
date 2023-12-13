import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getselectedSite, filter } from '../../slices/navListSlice'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'


const SiteList = () => {
  const { siteList, selectedSiteName } = useSelector(store=>store.navListSlice)
  const [ selected, setSelected ] = useState(selectedSiteName)
  
  useEffect(()=>{
    setSelected(selectedSiteName),[]
  })
  const dispatch = useDispatch()
  const handleSelectedSite = (sitename) =>{
    setSelected(sitename)
    dispatch(getselectedSite(
      { selectedSiteName:sitename}))
    dispatch(filter({selectedSiteName:sitename})) 
  }

    return ( 
        <List>
            {siteList.map(navitem => (
                <ListItem key={navitem.id} disablePadding>
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