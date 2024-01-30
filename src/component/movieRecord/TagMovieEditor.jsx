import MovieRecords from "./MovieRecords"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import TextField from '@mui/material/TextField'
import { useUpdateGenreMutation } from "../../slices/genreApiSlice"
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import TagDialog from "./TagDialog"

const TagMovieEditor = () => {
    const { selectedGenre } = useSelector(state=>state.recordSlice)
    const selectedGenreID = useSelector(state=>state.recordSlice.selectedGenre._id)
    const selectedGenreName = useSelector(state=>state.recordSlice.selectedGenre.name)
    const [ placeholder, setPlaceholder] = useState(selectedGenreName)
    const [ newGenre, setNewGenre ] = useState(selectedGenreName)
    const [ openDialog, setOpenDialog ] = useState(false)

    useEffect(()=>{
        setNewGenre('')
        setPlaceholder(selectedGenreName)
    },[selectedGenreName])

    const canSave = Boolean(newGenre)
    const changeGenre = (e) => {
        setNewGenre(e.target.value)
      } 
    const clearInput = () =>{
        setNewGenre('')
    }
    const [ updateGenre ] = useUpdateGenreMutation() 
    const handleSubmit = (e) =>{
        e.preventDefault()
        try{
            const genre = {...selectedGenre, name:newGenre}
            console.log(genre)
            const res = updateGenre({genre})
            // dispatch(setCredentials({...res}))
            }catch(err){
                console.log(err?.data?.message || err.error)
            }
            setNewGenre('')
            setPlaceholder('')
            setOpenDialog(false)
    }
    const handleClickOpenDialog = () => {
        setOpenDialog(true)
    }
    const handleCloseDialog = () => {
        setOpenDialog(false)
    }

    return ( 
        <>
        {selectedGenreName &&
            <Stack spacing={1} direction="row" alignItems="center" useFlexGap flexWrap="wrap" sx={{flexGrow:1, my:1}}>
              <TextField id={selectedGenreID} variant="outlined" size="small" placeholder={placeholder} value={newGenre} onChange={changeGenre}/>

              <Button variant="text" disabled={!canSave} onClick={clearInput}>Cancel</Button>
              <Button variant="contained" disabled={!canSave} onClick={handleClickOpenDialog}>Update</Button>
              <TagDialog openDialog={openDialog} handleCloseDialog={handleCloseDialog} handleSubmit={handleSubmit}/>
            </Stack>}
        <MovieRecords/>
        </>
     );
}
 
export default TagMovieEditor;