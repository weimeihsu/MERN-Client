import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRecords, deleteRecord } from '../features/recordCRUD/recordSlice'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import Box from '@mui/material/Box'

import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

import OpenModal from '../component/OpenModal'

const Records = () => {
    const dispatch = useDispatch()
    const {records, status, error} = useSelector(store => store.recordSlice)
    
    useEffect(()=>{
        dispatch(fetchRecords())
    },[])

    const handleRemove = async (id) =>{

        const res = await fetch(`/api/records/${id}`, {
            method: 'DELETE'
        })
        const theRecord = await res.json()

        if(res.ok){
            dispatch(deleteRecord({theRecord}))
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
                    <IconButton size="small" aria-label="delete" onClick={() => handleRemove(recordItem._id)}>
                        <DeleteIcon fontSize="inherit"/>
                    </IconButton>
                    <OpenModal key={recordItem._id} {...recordItem}/>
                </CardActions>
                </Box>  
            </Card>
        ))} 
        </>
     );
}
 
export default Records;