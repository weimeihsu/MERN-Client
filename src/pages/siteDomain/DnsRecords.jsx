import { useParams } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import ClearIcon from '@mui/icons-material/Clear'
import IconButton from '@mui/material/IconButton'
import { useState } from 'react'

const DnsRecords = () => {
    const { domainID } = useParams()
    const clearDomain = () =>{
      console.log(domainID)
    }
    return ( 
        <Grid container
          direction="row"
          alignItems="flex-start"
          spacing={2}
          sx={{p:4}}  
          >
            <IconButton onClick={clearDomain}> 
              <ClearIcon />
            </IconButton>
            <Grid item >
            <Typography variant="h5">DNS records</Typography>
            <Typography variant="body1">{ domainID }</Typography>
            </Grid>
        </Grid>  
     );
}
 
export default DnsRecords;