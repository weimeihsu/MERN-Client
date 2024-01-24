import Grid from '@mui/material/Grid'
import TagsInputs from '../component/movieRecord/TagsInput'
import Typography from '@mui/material/Typography'

import MovieRecords from '../component/movieRecord/MovieRecords'
import TagMovieEditor from '../component/movieRecord/TagMovieEditor'

const MovieEditor = () => {
  return ( 
    <Grid container
    direction="row"
    alignItems="flex-start"
    spacing={2}>
        <Grid item xs={6}>
          <Typography variant='h5'>Create Tags</Typography>
              <TagsInputs/>
        </Grid>
        <Grid item xs={6}>
          <Typography variant='h5'>Tag and Movie</Typography>
              <TagMovieEditor/>
        </Grid>  
    </Grid>
   );
}
 
export default MovieEditor;