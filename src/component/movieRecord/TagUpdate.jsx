import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { LightBgBox } from '../../customStyle/CustomComponent'
import { useUpdateGenreMutation } from '../../slices/genreApiSlice'
import { useUpdateRecordGenreMutation } from '../../slices/recordApiSlice'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TagDialog from './TagDialog'

const TagUpdate = () => {
    const { selectedGenre } = useSelector(state=>state.recordSlice)
    const selectedGenreID = useSelector(state=>state.recordSlice.selectedGenre._id)
    const selectedGenreName = useSelector(state=>state.recordSlice.selectedGenre.name)
    const [ placeholder, setPlaceholder] = useState(selectedGenreName)
    const [ newGenre, setNewGenre ] = useState(selectedGenreName)
    
    const [ openDialog, setOpenDialog ] = useState(false)
    const [ updateGenre ] = useUpdateGenreMutation() 
    const [ updateRecordGenre ] = useUpdateRecordGenreMutation()

    useEffect(()=>{
        setNewGenre('')
        setPlaceholder(selectedGenreName)
    },[selectedGenreName])

    const canSave = Boolean(newGenre)
    const changeGenre = (e) => {
        setNewGenre(e.target.value)
      } 
    const handleSubmit = (e) =>{
        e.preventDefault()
        try{
            const genre = {...selectedGenre, name:newGenre}
            
            const res = updateGenre({genre})
            updateRecordGenre({oldGenre:selectedGenreName, newGenre})
            }catch(err){
                console.log(err?.data?.message || err.error)
            }
            setNewGenre('')
            setPlaceholder('')
            setOpenDialog(false)
    }
    const clearInput = () =>{
        setNewGenre('')
    }
    const handleClickOpenDialog = () => {
        setOpenDialog(true)
    }
    const handleCloseDialog = () => {
        setOpenDialog(false)
    }
    const handleDelete = (id) => {
        console.log(id)
    }

    return ( 
        <>
        <LightBgBox>
            <Typography variant='h5'>Update Tag</Typography>
            <Stack spacing={1} direction="row" alignItems="center" useFlexGap flexWrap="wrap" sx={{flexGrow:1, my:1}}>
              <TextField id={selectedGenreID} variant="outlined" size="small" placeholder={placeholder} value={newGenre} onChange={changeGenre}/>

              <Button variant="text" disabled={!canSave} onClick={clearInput}>Cancel</Button>
              <Button variant="contained" disabled={!canSave} onClick={handleClickOpenDialog}>Update</Button>
              <TagDialog openDialog={openDialog} handleCloseDialog={handleCloseDialog} handleSubmit={handleSubmit}/>
            </Stack>
        </LightBgBox>
        <Typography variant='h6'>The tag is used by the following records</Typography>
        </>
     );
}
 
export default TagUpdate