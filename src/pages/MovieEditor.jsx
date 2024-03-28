import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import TagsInputs from '../component/movieRecord/TagsInput'
import TagMovieEditor from '../component/movieRecord/TagMovieEditor'
import MovieForm from '../component/movieRecord/MovieForm'
import { LightBgBox } from '../customStyle/CustomComponent'

const MovieEditor = () => {
  return ( 
    <Container maxWidth="md">
      <Grid container
        direction="row"
        alignItems="flex-start"
        spacing={2}>
            <Grid item xs={3}>
                <LightBgBox>
                  <TagsInputs/>
                </LightBgBox>
                <LightBgBox>
                  <MovieForm/>
                </LightBgBox>      
            </Grid>
            <Grid item xs={9}>
                <TagMovieEditor/>
            </Grid>  
        </Grid>
    </Container>
   );
}
 
export default MovieEditor;