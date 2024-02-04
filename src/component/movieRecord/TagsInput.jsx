
import { toTitleCase } from '../../func/funcs'
import { useState } from 'react'
import { useAddGenreMutation } from '../../slices/genreApiSlice'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormHelperText from '@mui/material/FormHelperText'
import Typography from '@mui/material/Typography'

const TagsInputs = () => {
    const [ trackedValue, setTrackedValue ] = useState('')
    const [ addGenre ] = useAddGenreMutation()
    // const [ newGenre, serNewGenre ] = useState('')
    const handleChange = (e) => {
        setTrackedValue(e.target.value)
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter'){
            const genre = toTitleCase(trackedValue)
            try{
                const res = addGenre({ name: genre }).unwrap
                // dispatch(setCredentials({...res}))
                }catch(err){
                    console.log(err?.data?.message || err.error)
                }
                setTrackedValue('')
        }
        
    }

    return ( 
        <>
        <Typography variant='h5'>Create Tags</Typography>
        <FormControl size="small" sx={{marginTop:1}}>
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
     )
}
 
export default TagsInputs