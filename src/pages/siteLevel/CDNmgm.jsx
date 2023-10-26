import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Typography from '@mui/material/Typography'

const CDNmgm = () => {
    const { filteredDomainlist, selectedDomainName } = useSelector(store=>store.navListSlice)
    const { siteID, domainID } = useParams()
    const [ domain, setDomain ] = useState('')
    const handleChange = (e) =>{
      setDomain(e.target.value)
    }
    return ( 
        <>
        <h1>CDN Management{domainID}</h1>
        <Typography variant="h6" gutterBottom>{siteID}</Typography>
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Domains</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedDomainName}
            label="Domains"
            onChange={handleChange}
          >
            {filteredDomainlist.map(recordItem => (
              <MenuItem key={recordItem.id} value={recordItem.domainname}>{recordItem.domainname}</MenuItem>
            ))}
          </Select>
        </FormControl>
        </Box>
        </>
     );
}
 
export default CDNmgm;