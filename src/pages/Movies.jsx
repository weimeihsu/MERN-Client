import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import MovieForm from '../component/movieForm'
import MovieRecords from '../component/MovieRecords'
import Container from '@mui/material/Container'

const Movies = () => {
    return ( 
        <>
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={4}>
                    <Grid item xs={8}>
                        <h1>Movie List</h1>
                        <MovieRecords/>
                    </Grid>
                    <Grid item xs={4}>
                        <MovieForm/>
                    </Grid>
                </Grid>
            </Box>
        </Container>
        </>
     );
}
 
export default Movies;