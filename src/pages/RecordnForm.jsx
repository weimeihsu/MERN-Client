import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import MovieRecords from '../component/MovieRecords'
import Container from '@mui/material/Container'
import MovieForm from '../component/movieForm'

const RecordnForm = () => {

    return ( 
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={4}>
                    <Grid item xs={8}>
                        <h1>Records</h1>
                        <MovieRecords/>
                        
                    </Grid>
                    <Grid item xs={4}>
                        <MovieForm/>
                        
                    </Grid>
                </Grid>
            </Box>
        </Container>
     )
}
 
export default RecordnForm;