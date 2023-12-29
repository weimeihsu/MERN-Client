import Grid from '@mui/material/Grid'

import MovieForm from '../component/movieRecord/MovieForm'
import MovieRecords from '../component/movieRecord/MovieRecords'
import Typography from '@mui/material/Typography'

const Movies = () => {
    return ( 
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Typography variant='h5'>Movie List</Typography>
                <MovieRecords/>
            </Grid>
            <Grid item xs={4}>
                <MovieForm/>
            </Grid>
        </Grid>
     );
}
 
export default Movies;