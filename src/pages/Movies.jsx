import Grid from '@mui/material/Grid'

import MovieRecords from '../component/movieRecord/MovieRecords'
import Typography from '@mui/material/Typography'

const Movies = () => {
    return ( 
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant='h5'>Movie List</Typography>
                <MovieRecords/>
            </Grid>
        </Grid>
     );
}
 
export default Movies;