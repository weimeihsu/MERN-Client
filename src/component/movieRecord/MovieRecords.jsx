import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRecords, syncToFilter } from '../../slices/recordSlice'
import EditTools from './EditTools'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'


const MovieRecords = () => {
    const dispatch = useDispatch()
    const { records, filtered } = useSelector(state => state.recordSlice)
    const { selectedMainMenuName } = useSelector(state => state.navListSlice)
    const canEdit = Boolean(selectedMainMenuName === 'Movie Editor')
    useEffect(()=>{
        dispatch(fetchRecords())
        dispatch(syncToFilter())
    },[records])
    
    return ( 
        <>
         {filtered && filtered.map(recordItem=>(
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