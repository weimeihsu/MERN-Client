import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addRecord, updateRecord } from '../../slices/recordSlice'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import api from '../../axois/api'
import { useGetGenresQuery } from '../../slices/genreApiSlice'
import { VisuallyHiddenInput } from '../../customStyle/CustomComponent'
import { convertToBase64 } from '../../func/funcs'

const MovieForm = ({recordID, recordTitle, recordGenre, recordImg, formTitle, imgBtnText, btnText, closeForm}) => {
    const dispatch = useDispatch()
    const { data: genres=[], isLoading } = useGetGenresQuery()
    // const { genres } = useSelector(store => store.recordSlice)
    // this state is for button and title text

    const [ title, setTitle ] = useState(recordID ? recordTitle : '')
    const [ genre, setGenre ] = useState(recordID ? recordGenre : '')
    const [ img, setImg ] = useState(recordID ? recordImg : '')
    const [ error, setError ] = useState(null)
    
    const changeTitle = (e) => {
        setTitle(e.target.value)
    }
    const changeGenre = (e) => {
        setGenre(e.target.value)
    }
    const changeImg = async (e) => {
        const file = e.target.files[0]
        const base64Img = await convertToBase64(file)
        setImg(base64Img)
    }
    const handleClear =() =>{
        setGenre('')
        setTitle('')
        setImg('')
    }
    // condition. add or update
    const handleSubmit = (e) => {
        e.preventDefault()

        const record = {title, genre, img}

        recordID ? recordUpdate(id, record) : recordCreate(record)          
    }
    // create record
    const recordCreate = async (record) => {
        try{
            const res = await api.post('/api/records', record)
            const newRecord = await res.data

            dispatch(addRecord({newRecord}))
            setGenre('')
            setTitle('')
            setImg('')
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
        <Box>
            <Typography variant='h5'>{formTitle}</Typography>
            {recordID && 
                <Stack spacing={2}>
                    <div><Typography mr={2} sx={{fontWeight:'bold'}}>Movie ID:</Typography>{recordID}</div>
                    <div><Typography mr={2} sx={{fontWeight:'bold'}}>Moview Title:</Typography>{recordTitle}</div>
                    <div><Typography mr={2} sx={{fontWeight:'bold'}}>Movie Genre:</Typography>{recordGenre}</div>
                </Stack>
            }
            <Box component="form" onSubmit={handleSubmit}>    
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
                <Button component="label" variant="contained" sx={{mb:2}} startIcon={<CloudUploadIcon />} >
                    {imgBtnText}
                    <VisuallyHiddenInput type="file" onChange={changeImg} accept='.jpeg, .png, .jpg'/>
                </Button>
                <img src={img} width='200px'/>
                <Stack spacing={2} direction="row" justifyContent="flex-end"> 
                    {recordID ? (<Button variant='text' type='button' onClick={closeForm}>Cancel</Button>) : (<Button variant='text' onClick={handleClear}>Cancel</Button>) }      
                    <Button variant="contained" type='submit'>{btnText}</Button> 
                </Stack>
                {error && <div>{error}</div>}
            </Box>
        </Box>
    );
}

MovieForm.defaultProps = {
    formTitle: 'Create Movie',
    imgBtnText: 'Img Upload',
    btnText:'Create',
}
export default MovieForm;