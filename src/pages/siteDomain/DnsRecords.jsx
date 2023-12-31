import { useParams } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const DnsRecords = () => {
    const { siteID } = useParams()
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
            <Grid item >
            <Typography variant="h5">DNS records</Typography>
            <Typography variant="body1">{ siteID }</Typography>
            <Typography variant="body1">{ domainID }</Typography>
            </Grid>
        </Grid>  
     );
}
 
export default DnsRecords;