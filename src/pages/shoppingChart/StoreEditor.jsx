import { useState } from "react"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from "@mui/material/TextField"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"

const StoreEditor = () => {
    const [ category, setCategory ] = useState(10)
    const handleChangeCategory = ()=>{

    }
    return ( 
        <Container maxWidth="md">
            <Grid container
            direction="row"
            alignItems="flex-start"
            spacing={2}>
                <Grid item>
                <Typography variant="h5">Store Editor</Typography>
                <Box component="form">
                    <Stack direction="column" spacing={2}>
                    <FormControl fullWidth size="small">
                        <InputLabel id="product-category-label">Category</InputLabel>
                        <Select
                        autoWidth
                        labelId="product-category"
                        id="product-category"
                        value={category}
                        label="Category"
                        onChange={handleChangeCategory}
                        >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField id="product-name" label="Product Name" variant="outlined" size="small"/>
                    <TextField id="product-price" label="Price" variant="outlined" size="small"/>
                    <Button type="submit" variant="contained">Create</Button>
                    </Stack>
                </Box>
                </Grid>
            </Grid>
        </Container>
     );
}
 
export default StoreEditor;