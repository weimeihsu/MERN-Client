import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRecord, fetchRecords, updateRecord } from '../features/recordCRUD/recordSlice'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import apiMovieRecords from '../axois/apiMovieRecords'

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
        console.log(id)           
    }
    // create record
    const recordCreate = async (record) => {
        try{
            const res = await apiMovieRecords.post('/api/records', record)
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
            const res = await apiMovieRecords.put(`/api/records/${id}`, record)
            const theRecord = await res.data
            dispatch(updateRecord(theRecord))
        }catch(err){
            err.message
        }         
    }
    return ( 
        <>
        <h1>{formTitle}</h1>
        <form onSubmit={handleSubmit}>
            {recordID && 
            <Box>
            <h4>Current Data</h4>
            <Typography>Movie ID:{recordID}</Typography>
            <Typography>Moview Title:{recordTitle}</Typography>
            <Typography>Movie Category:{recordCategory}</Typography>
            </Box>}
            
                <TextField id="outlined-basic" label="Movie name" variant="outlined" size="small" sx={{mb:2}} fullWidth required onChange={changeTitle} value={title}/>
                    <FormControl fullWidth size="small" sx={{mb:2}}>
                        <InputLabel id="movie-category">Category</InputLabel>
                        <Select
                        labelId="movie-category"
                        id="demo-simple-select"
                        value={category}
                        label="Category"
                        onChange={changeCategory}  
                        >
                            {categories.map((categoryItem, idx)=>(
                                <MenuItem key={idx} value={categoryItem}>{categoryItem}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                <Stack spacing={2} direction="row">
                    <Button variant="contained" type='submit'>{btnText}</Button>
                    {recordID && <Button variant="outlined" type='cacenl' onClick={closeForm}>Cancel</Button> }
                        
                </Stack>
                {error && <div>{error}</div>}
        </form>
        </>
    );
}

MovieForm.defaultProps = {
    formTitle: 'Create Movie',
    btnText:'Create',
}
export default MovieForm;