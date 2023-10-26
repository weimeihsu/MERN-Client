import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import RecordForm from '../component/recordForm'
import Records from '../component/Records'
import Container from '@mui/material/Container'

const RecordnForm = () => {

    return ( 
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={4}>
                    <Grid item xs={8}>
                        <h1>Records</h1>
                        <Records/>
                    </Grid>
                    <Grid item xs={4}>
                        <RecordForm/>
                    </Grid>
                </Grid>
            </Box>
        </Container>
     )
}
 
export default RecordnForm;