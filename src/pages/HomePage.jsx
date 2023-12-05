import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { useState } from 'react'

const HomePage = () => {
     const [ imgSize, setImgSize ] = useState('small')
     const [ promt, setPromt ] = useState()
     const imgSizes = [ 'small', 'medium']
     const changeImageSize = (e) =>{
          setImgSize(e.target.value)
     }
     const changePromt = (e) =>{
          setPromt(e.target.value)
     }
     const handleSubmit = async (e)=>{
          e.preventDefault()
          const reqImg = {imgSize, promt} 
          console.log(reqImg)
          try{
               const result = await api.post('api/openai/genimage', reqImg)
           }
           catch(err){
               err.message
           }
     }
     return (
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={8}>
               <Typography variant='h5'>Open AI Image</Typography>
               <Box
               component="form"
               sx={{'& > :not(style)': { m: 1, minWidth: 320 }}}
               autoComplete="off"
               onSubmit={handleSubmit}
               >
                    <Stack direction='column' spacing={2}>
                         <TextField required size="small" id="promt" label="promt" variant="outlined" value={promt} onChange={changePromt}/>
                         <FormControl fullWidth required sx={{mb:2}} size='small'>
                              <InputLabel id="img-size">Image Size</InputLabel>
                              <Select
                              labelId="label-img-size"
                              value={imgSize}
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
          </Grid>
          </Box>
     );
}
 
export default HomePage;