import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import Box from '@mui/material/Box'
import OpenModal from './OpenModal'
import api from '../../axois/api'
import { useDispatch } from 'react-redux'
import { deleteRecord } from '../../slices/recordSlice'

const EditTools = ({id, title, genre}) => {
    const dispatch = useDispatch()
    const handleDelete = async (id) =>{
        try{
            const res = await api.delete(`/api/records/${id}`)
            dispatch(deleteRecord({recordID: id}))
        }catch(err){
            return err.message
        }
    }
    return ( 
        <Box>
            <IconButton size="small" aria-label="delete" onClick={() => handleDelete(id)}>
                <DeleteIcon fontSize="inherit"/>
            </IconButton>
            <OpenModal key={id} id={id} title={title} genre={genre}/>
        </Box> 
     );
}
 
export default EditTools;