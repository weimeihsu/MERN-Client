import MovieRecords from "./MovieRecords"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

const TagMovieEditor = () => {
    const { selectedGenre } = useSelector(state=>state.recordSlice)
    const [ newGenre, setNewGenre ] = useState(selectedGenre)
   
    const canSave = Boolean(newGenre)
    const canAdd = Boolean(newGenre)
    const changeGenre = (e) => {
        setNewGenre(e.target.value)
      } 
    const clearInput = () =>{
        setNewGenre('')
    }
    const handleSubmit = () =>{
        console.log('submit')
    }
    return ( 
        <>
        {selectedGenre &&
            <Stack spacing={1} direction="row" alignItems="center" useFlexGap flexWrap="wrap" sx={{flexGrow:1}}>
              <TextField id="genre" label="Genre" variant="outlined" size="small" value={newGenre} onChange={changeGenre} disabled={!canAdd}/>

              {selectedGenre && <Button variant="text" disabled={!canSave} sx={{ml:2}} onClick={clearInput}>Cancel</Button>}
              <Button variant="contained" disabled={!canSave} type='submit' onClick={handleSubmit}>Update</Button>
            </Stack>}
        <MovieRecords/>
        </>
     );
}
 
export default TagMovieEditor;