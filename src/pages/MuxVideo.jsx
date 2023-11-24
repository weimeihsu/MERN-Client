import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TagsInputs from '../component/movieRecord/TagsInput'
import MovieRecords from '../component/movieRecord/MovieRecords'

const MuxVideo = () => {
  return ( 
    <Container>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
                <Grid item xs={6}>
                  <h1>Movie Tags Create and Update</h1>
                  <TagsInputs/>
                </Grid>
                <Grid item xs={6}>
                  <h1>Current Moview List</h1>
                  {/* <MovieRecords/> */}
                </Grid>
            </Grid>
        </Box>
    </Container>
   );
}
 
export default MuxVideo;