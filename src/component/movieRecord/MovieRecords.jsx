import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRecords, deleteRecord, filter } from '../../slices/recordSlice'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

import OpenModal from './OpenModal'
import api from '../../axois/api'

const MovieRecords = () => {
    const dispatch = useDispatch()

    const { filtered, selectedGenre } = useSelector(store => store.recordSlice)

    useEffect(()=>{
        dispatch(fetchRecords())
    },[])

    const handleDelete = async (id) =>{
        try{
            const res = await api.delete(`/api/records/${id}`)
            dispatch(deleteRecord({recordID: id}))
        }catch(err){
            return err.message
        }
    }
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

                <CardActions sx={{p:2}}>
                    <IconButton size="small" aria-label="delete" onClick={() => handleDelete(recordItem._id)}>
                        <DeleteIcon fontSize="inherit"/>
                    </IconButton>
                    <OpenModal key={recordItem._id} id={recordItem._id} title={recordItem.title} genre={recordItem.genre}/>
                </CardActions> 
            </Card>
        ))} 
        </>
     );
}
 
export default MovieRecords;