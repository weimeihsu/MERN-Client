import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const TryLayout = () => {
    return ( 
        <Box sx={{ flexGrow: 1, m:2}}>
            <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
                <Box sx={{backgroundColor:'#ccc'}}>123</Box>
            </Grid>
            <Grid item xs={6} md={4}>
                <Box sx={{backgroundColor:'#ccc'}}>123</Box>
            </Grid>
        </Grid>
        </Box>
         );
}
 
export default TryLayout;