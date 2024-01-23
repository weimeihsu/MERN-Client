
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormHelperText from '@mui/material/FormHelperText'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import CreateIcon from '@mui/icons-material/Create'
import Stack from '@mui/material/Stack'
import { useState } from 'react'
import { useGetGenresQuery } from '../../slices/genreApiSlice'



const TagsInputs = () => {
    const [ trackedValue, setTrackedValue ] = useState('')
    const { data: genres, isLoading } = useGetGenresQuery()
    const [ genre, setGenre ] = useState([])
    const handleChange = (e) => {
            setTrackedValue(e.target.value)
        }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter'){
            setGenre([...genre, trackedValue])
            setTrackedValue('')
        }
    }
    const handleDelete = (idx) => {
        console.log('You clicked the delete icon.'+ idx);
    }
    return ( 
        <>
            {genre.map((item,idx)=>(
                <Stack key={idx} direction="row" justifyContent="space-between">
                    <Chip label={item}/>
                    <Stack direction="row" spacing={1}>
                        <IconButton aria-label="delete" size="small" onClick={()=>handleDelete(idx)}>
                        <DeleteIcon fontSize="inherit" />
                        </IconButton>
                        <IconButton aria-label="createIcon" size="small">
                        <CreateIcon fontSize="inherit" />
                        </IconButton>
                    </Stack>
                </Stack>
            ))} 
        
        <FormControl size="small" sx={{marginTop:1}}>
            {/* <InputLabel htmlFor="component-outlined">Category</InputLabel> */}
            <OutlinedInput
            id="component-outlined" 
            placeholder="Type in Category..."
            value={trackedValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            />
            <FormHelperText id="component-helper-text">
            Press enter to create
            </FormHelperText>
        </FormControl>
        </>
        
     );
}
 
export default TagsInputs;