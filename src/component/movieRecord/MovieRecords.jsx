import { useSelector } from 'react-redux'
import { useGetRecordsQuery } from '../../slices/recordApiSlice'
import EditTools from './EditTools'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'

const MovieRecords = () => {
    const selectedGenreName = useSelector(state => state.recordSlice.selectedGenre.name)
    const { selectedMainMenuName } = useSelector(state => state.navListSlice)
    const { data: filteredRecords=[], isLoading } = useGetRecordsQuery({selectedGenreName})
    
    const canEdit = Boolean(selectedMainMenuName === 'Movie Editor')

    return ( 
        <Grid container spacing={1}>
         {filteredRecords && filteredRecords.map(recordItem=>(
            <Grid item xs={4}>
                <Box key={recordItem._id} variant="outlined" sx={{p: 2, border: '1px  solid #eeeeee'}}>
                
                    <Stack direction="row" spacing={2}>
                        <img src={recordItem.img} alt={recordItem.title}/>
                        <Stack spacing={1}>
                        <Typography variant="h6" sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: "1",
                            WebkitBoxOrient: "vertical",
                        }}>
                            {recordItem.title}
                        </Typography>
                        <Chip label={recordItem.genre} size="small" sx={{mr:1}}/>
                        <Typography variant="caption">
                            {recordItem.createdAt}
                        </Typography>
                        </Stack>
                    </Stack>
                
                {canEdit ? (<EditTools id={recordItem._id} title={recordItem.title} genre={recordItem.genre}/>):(null)}
            </Box>
            </Grid>
        ))} 
        </Grid>
     );
}
 
export default MovieRecords;