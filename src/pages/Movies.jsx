import { useSelector } from 'react-redux'
import { useGetRecordsQuery } from '../slices/recordApiSlice'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import MovieCard from '../component/movieRecord/MovieCard'

const Movies = () => {
    const selectedGenreName = useSelector(state => state.recordSlice.selectedGenre.name)

    const { data: filteredRecords=[], isLoading } = useGetRecordsQuery({selectedGenreName})
    return ( 
        <Container maxWidth="md">
            <Typography variant='h5'>Movie List</Typography>
            <Grid container spacing={1}>
                {filteredRecords && filteredRecords.map(recordItem=>(
                    <Grid item xs={12} md={4} key={recordItem._id} >
                        <MovieCard {...recordItem}/>
                    </Grid>
                ))} 
            </Grid> 
        </Container>
     );
}
 
export default Movies;