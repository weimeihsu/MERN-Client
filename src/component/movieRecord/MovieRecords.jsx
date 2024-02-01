import { useSelector } from 'react-redux'
import { useGetRecordsQuery } from '../../slices/recordApiSlice'
import EditTools from './EditTools'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'


const MovieRecords = () => {
    const selectedGenreName = useSelector(state => state.recordSlice.selectedGenre.name)
    const { selectedMainMenuName } = useSelector(state => state.navListSlice)
    const { data: filteredRecords=[], isLoading } = useGetRecordsQuery({selectedGenreName})
    
    const canEdit = Boolean(selectedMainMenuName === 'Movie Editor')

    return ( 
        <>
         {filteredRecords && filteredRecords.map(recordItem=>(
            <Card key={recordItem._id} variant="outlined" sx={{mb:1, display:'flex', justifyContent:'space-between'}} >
                <CardContent>
                    <Typography variant="h6">
                        {recordItem.title}
                    </Typography>
                    <Chip label={recordItem.genre} size="small" sx={{mr:1}}/>
                    <Typography variant="caption">
                        {recordItem.createdAt}
                    </Typography>
                </CardContent>
                {canEdit ? (<EditTools id={recordItem._id} title={recordItem.title} genre={recordItem.genre}/>):(null)}
            </Card>
        ))} 
        </>
     );
}
 
export default MovieRecords;