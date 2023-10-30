import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRecords } from '../features/recordCRUD/recordSlice'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import Box from '@mui/material/Box'

import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

import OpenModal from './OpenModal'
import axios from 'axios'

const movieRecords = () => {
    const dispatch = useDispatch()
    const {records} = useSelector(store => store.recordSlice)
    
    useEffect(()=>{
        dispatch(fetchRecords())
    },[])

    const handleDelete = async (id) =>{
        try{
            await axios.delete(`/api/records/${id}`)
            dispatch(fetchRecords())
        }catch(err){
            return err.message
        }
    }
    return ( 
        <>
         {records && records.map(recordItem=>(
            <Card key={recordItem._id} variant="outlined" sx={{mb:2, display:'flex', justifyContent:'space-between'}} >
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                    <Typography variant="h5">
                        {recordItem.title}
                    </Typography>
                    <Chip label={recordItem.category} size="small" sx={{mr:1}}/>
                    <Typography variant="caption">
                        {recordItem.createdAt}
                    </Typography>
                </CardContent>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardActions sx={{p:2}}>
                    <IconButton size="small" aria-label="delete" onClick={() => handleDelete(recordItem._id)}>
                        <DeleteIcon fontSize="inherit"/>
                    </IconButton>
                    <OpenModal key={recordItem._id} id={recordItem._id} title={recordItem.title} category={recordItem.category}/>
                </CardActions>
                </Box>  
            </Card>
        ))} 
        </>
     );
}
 
export default movieRecords;