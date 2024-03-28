import { useSelector } from 'react-redux'
import { useGetRecordsQuery } from '../../slices/recordApiSlice'
import EditTools from './EditTools'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import MovieCard from './MovieCard'

const MovieRecords = () => {
    const selectedGenreName = useSelector(state => state.recordSlice.selectedGenre.name)
    // const { selectedMainMenuName } = useSelector(state => state.navListSlice)
    const { data: filteredRecords=[], isLoading } = useGetRecordsQuery({selectedGenreName})
    
    // const canEdit = Boolean(selectedMainMenuName === 'Movie Editor')

    return ( 
        <>
         {filteredRecords && filteredRecords.map(recordItem=>(
            <MovieCard key={recordItem._id} {...recordItem}/>
        ))} 

        {/* {filteredRecords && filteredRecords.map(recordItem=>(
            <Box key={recordItem._id} variant="outlined" sx={{padding:'8px 12px 8px 8px', border: '1px  solid #eeeeee'}}>
                <Stack direction="row" spacing={1} sx={{ minWidth: 0 }}>
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
            {canEdit ? (<EditTools id={recordItem._id} title={recordItem.title} genre={recordItem.genre} img={recordItem.img}/>):(null)}
            </Box>
        ))}  */}
        </>
     );
}
 
export default MovieRecords;