import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import TagsInputs from '../component/movieRecord/TagsInput'
import Typography from '@mui/material/Typography'
import MovieRecords from '../component/movieRecord/MovieRecords'

const MovieEditor = () => {
  return ( 
    <Grid container
    direction="row"
    alignItems="flex-start"
    spacing={2}>
        <Grid item xs={6}>
          <Typography variant='h5'>Movie Tags Create and Update</Typography>
          <TagsInputs/>
        </Grid>
        <Grid item xs={6}>
          <Typography variant='h5'>Current MovieList</Typography>
          {/* <MovieRecords/> */}
        </Grid>  
    </Grid>
   );
}
 
export default MovieEditor;