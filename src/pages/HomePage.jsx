import { useState } from 'react'
import api from '../axois/api'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import CircularProgress from '@mui/material/CircularProgress'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'

const HomePage = () => {
     const [ size, setSize ] = useState('')
     const [ prompt, setPrompt ] = useState('')
     const [ imgUrl, setImgUrl ] = useState('')
     const [ laoding, setLoading ] = useState(false)
     const imgSizes = [ 'small', 'medium' ]
     
     const changeImageSize = (e) =>{
          setSize(e.target.value)
     }
     const changePrompt = (e) =>{
          setPrompt(e.target.value)
     }
     // const showSpinner = () =>{
     //      setLoading(true)
     // }
     const handleSubmit = (e)=>{
          e.preventDefault()
          const imgValue = { size, prompt }
          generateImageRequest(imgValue)
     }
     const generateImageRequest = async (imgValue) =>{
          try{
               const res = await api.post('/api/openai/genimage', imgValue)
               const resImgUrl = await res.data.data
               setImgUrl(resImgUrl)

               // if(!res.ok){
               //      throw new Error(res.status)
               // }
           }
           catch(err){
               err.message
           }
     }
     
     return (
          <Grid container
          direction="row"
          alignItems="center" >
               <Box
               component="form"
               sx={{'& > :not(style)': { m: 1, minWidth: 320 }}}
               autoComplete="off"
               onSubmit={handleSubmit}
               >
                    <Stack direction='column' spacing={2}>
                    <Typography variant='h5'>AI Generated Photo</Typography>
                         <TextField required size="small" id="prompt" label="prompt" variant="outlined" value={prompt} onChange={changePrompt}/>
                         <FormControl fullWidth required sx={{mb:2}} size='small'>
                              <InputLabel id="img-size">Image Size</InputLabel>
                              <Select
                              labelId="label-img-size"
                              value={size}
                              label="Image-Size"
                              onChange={changeImageSize}  
                              >
                                   {imgSizes.map((item, idx)=>(
                                        <MenuItem name={item} key={idx} value={item}>{item}</MenuItem>
                                   ))}
                              </Select>
                         </FormControl>
                         <Button variant="contained" type='submit'>Generate</Button>
                    </Stack>
               </Box> 
               <Stack direction='column' spacing={2}  alignItems="center">
                    {imgUrl ? <Card>
                    <CardMedia
                         component="img"
                         height="256"
                         image={imgUrl}
                         alt="ai image"
                         />
                   </Card> : <Typography variant='subtitle1'>Describe and Click on "Generate"</Typography>}
               {laoding && <CircularProgress />}
               </Stack>
          </Grid>
     );
}
 
export default HomePage;