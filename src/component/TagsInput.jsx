import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormHelperText from '@mui/material/FormHelperText'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import { useState } from 'react'


const TagsInputs = () => {
    const [ trackedValue, setTrackedValue ] = useState('')
    const [ category, setCategory ] = useState([])
    const handleChange = (e) => {
            setTrackedValue(e.target.value)
        }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter'){
            setCategory([...category, trackedValue])
            setTrackedValue('')
        }
    }
    const handleDelete = (idx) => {
        console.info('You clicked the delete icon.'+ idx);
    }
    return ( 
        <>
        <Stack direction="row" spacing={1}>
            {category.map((item,idx)=>(
                <Chip key={idx} label={item} onDelete={()=>handleDelete(idx)} />
            ))} 
        </Stack>
        
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