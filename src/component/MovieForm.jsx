import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRecord } from '../features/recordCRUD/recordSlice'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

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
        recordID ? recordUpdate({title, category}) : recordCreate({title, category})                
    }
    // create record
    const recordCreate = async (record) => {
        
        const res = await fetch('/api/records', {
            method: 'POST',
            body: JSON.stringify(record),
            headers: {
                'Content-Type':'application/json'
            }
        })
        
        const newRecord = await res.json()
        if(!res.ok){
            setError(newRecord.error)
        }
        if(res.ok){
            setCategory('')
            setTitle('')
            setError(null)
            dispatch(addRecord({newRecord}))
        }               
    }
    // update record
    const recordUpdate = async (record) => {

        const res = await fetch(`/api/records/${id}`, {
            method: 'PUT',
            body: JSON.stringify(record),
            headers: {
                'Content-Type':'application/json'
            }
        })
        console.log(res.json())
        // const theRecord = await res.json()
        // if(!res.ok){
        //     setError(theRecord.error)
        // }
        // if(res.ok){
        //     setCategory('')
        //     setTitle('')
        //     setError(null)
        //     // dispatch(updateRecord({theRecord}))
        // }               
    }
    return ( 
        <>
        <h1>{formTitle}</h1>
        <form onSubmit={handleSubmit}>
            {recordID && 
            <Box>
            <h4>Origin Data</h4>
            <p>Movie ID:{recordID}</p>
            <p>Moview Title:{recordTitle}</p>
            <p>Movie Category:{recordCategory}</p>
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