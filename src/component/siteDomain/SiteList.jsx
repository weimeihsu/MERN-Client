import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { useGetSitesQuery } from '../../slices/domainApiSlice'
import { setCategoryTerm, clearSearchText } from '../../slices/domainFilterSlice'

const SiteList = () => {
  const dispatch = useDispatch()
  const { categoryTerm } = useSelector(state => state.domainFilterSlice)
  const [ selected, setSelected ] = useState(categoryTerm)

  const { data:sites, isLoading, error } = useGetSitesQuery()

  useEffect(()=>{
    setSelected(categoryTerm)
  }, [categoryTerm])
  
  const getSite = (site) =>{
    setSelected(site)
    dispatch(clearSearchText())
    dispatch(setCategoryTerm(site))
  }

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