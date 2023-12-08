import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRecord, fetchRecords, updateRecord } from '../../slices/recordSlice'
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

const MovieForm = ({recordID, recordTitle, recordCategory, formTitle, btnText, closeForm}) => {
    const dispatch = useDispatch()
    const {categories} = useSelector(store => store.recordSlice)
    // this state is for button and title text

    const [title, setTitle] = useState(recordID ? recordTitle : '')
    const [category, setCategory] = useState(recordID ? recordCategory :'')
    const [error, setError] = useState(null)
    
    const changeTitle = (e) => {
        setTitle(e.target.value);
    }
    const changeCategory = (e) => {
        setCategory(e.target.value)
    }
    // condition. add or update
    const handleSubmit = (e) => {
        e.preventDefault()
        // recordCreate({title, category})
        const id = recordID 
        const record = {title, category}
        id ? recordUpdate(id, record) : recordCreate(record)           
    }
    // create record
    const recordCreate = async (record) => {
        try{
            const res = await api.post('/api/records', record)
            const newRecord = await res.data
            dispatch(addRecord({newRecord}))
            setCategory('')
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
            dispatch(updateRecord({theRecord:record, id}))
            setCategory('')
            setTitle('')
            closeForm()
        }catch(err){
            err.message
        }         
    }
    return ( 
        <>
        <Typography variant='h5'>{formTitle}</Typography>
        <Box component="form" onSubmit={handleSubmit}>

        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        {recordID && 
            <Grid item>
                 <Stack spacing={2}>
                    <Typography>Current Data</Typography>
                    <div><Typography mr={2} sx={{fontWeight:'bold'}}>Movie ID:</Typography>{recordID}</div>
                    <div><Typography mr={2} sx={{fontWeight:'bold'}}>Moview Title:</Typography>{recordTitle}</div>
                    <div><Typography mr={2} sx={{fontWeight:'bold'}}>Movie Category:</Typography>{recordCategory}</div>
                </Stack>
            </Grid>
         }
            <Grid item>
            <TextField id="movie-name" label="Movie name" variant="outlined" size="small" sx={{mb:2}} fullWidth onChange={changeTitle} value={title}/>
                    <FormControl fullWidth required size="small" sx={{mb:2}}>
                        <InputLabel id="movie-category">Category</InputLabel>
                        <Select
                        labelId="label-movie-category"
                        value={category}
                        label="Category"
                        onChange={changeCategory}  
                        >
                            {categories.map((categoryItem, idx)=>(
                                <MenuItem name={categoryItem} key={idx} value={categoryItem}>{categoryItem}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                <Stack spacing={2} direction="row">
                    <Button variant="contained" type='submit'>{btnText}</Button>
                    {recordID && <Button variant="outlined" type='cancel' onClick={closeForm}>Cancel</Button> }      
                </Stack>
                {error && <div>{error}</div>}
            </Grid>
        </Grid>  
        </Box>
        </>
    );
}

MovieForm.defaultProps = {
    formTitle: 'Create Movie',
    btnText:'Create',
}
export default MovieForm;