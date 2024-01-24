import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRecord, updateRecord } from '../../slices/recordSlice'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import api from '../../axois/api'
import { useGetGenresQuery } from '../../slices/genreApiSlice'

const MovieForm = ({recordID, recordTitle, recordGenre, formTitle, btnText, closeForm}) => {
    const dispatch = useDispatch()
    const { data: genres=[], isLoading } = useGetGenresQuery()
    // const { genres } = useSelector(store => store.recordSlice)
    // this state is for button and title text

    const [ title, setTitle ] = useState(recordID ? recordTitle : '')
    const [ genre, setGenre ] = useState(recordID ? recordGenre : '')
    const [ error, setError ] = useState(null)
    
    const changeTitle = (e) => {
        setTitle(e.target.value);
    }
    const changeGenre = (e) => {
        setGenre(e.target.value)
    }
    // condition. add or update
    const handleSubmit = (e) => {
        e.preventDefault()
        // recordCreate({title, genre})
        const id = recordID 
        const record = {title, genre}
        id ? recordUpdate(id, record) : recordCreate(record)           
    }
    // create record
    const recordCreate = async (record) => {
        try{
            const res = await api.post('/api/records', record)
            const newRecord = await res.data
            dispatch(addRecord({newRecord}))
            setGenre('')
            setTitle('')
        }
        catch(err){
            err.message
        }
    }
    // update record
    const recordUpdate = async (id, record) => { 
        try{
            const res = await api.put(`/api/records/${id}`, record)
            const theRecord = await res.data
            dispatch(updateRecord({theRecord, record}))
            setGenre('')
            setTitle('')
            closeForm()
        }catch(err){
            err.message
        }         
    }
    return ( 
        <Box sx={{ paddingTop: recordID ? 4 : 0}}>
        <Typography variant='h5'>{formTitle}</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{paddingTop:2}}>

        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        {recordID && 
            <Grid item>
                 <Stack spacing={2}>
                    <Typography>Current Data</Typography>
                    <div><Typography mr={2} sx={{fontWeight:'bold'}}>Movie ID:</Typography>{recordID}</div>
                    <div><Typography mr={2} sx={{fontWeight:'bold'}}>Moview Title:</Typography>{recordTitle}</div>
                    <div><Typography mr={2} sx={{fontWeight:'bold'}}>Movie Genre:</Typography>{recordGenre}</div>
                </Stack>
            </Grid>
         }
            <Grid item>
            <TextField id="movie-name" label="Movie name" variant="outlined" size="small" sx={{mb:2}} fullWidth onChange={changeTitle} value={title}/>
                    <FormControl fullWidth required size="small" sx={{mb:2}}>
                        <InputLabel id="movie-genre">Genre</InputLabel>
                        <Select
                        labelId="label-movie-genre"
                        value={genre}
                        label="Genre"
                        onChange={changeGenre}  
                        >
                            {genres.map(item=>(
                                <MenuItem name={item.name} key={item._id} value={item.name}>{item.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                <Stack spacing={2} direction="row">
                    <Button variant="contained" type='submit'>{btnText}</Button>
                    {recordID && <Button variant="outlined" type='button' onClick={closeForm}>Cancel</Button>}      
                </Stack>
                {error && <div>{error}</div>}
            </Grid>
        </Grid>  
        </Box>
        </Box>
    );
}

MovieForm.defaultProps = {
    formTitle: 'Create Movie',
    btnText:'Create',
}
export default MovieForm;