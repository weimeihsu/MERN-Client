import { useState } from 'react'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import Stack from '@mui/material/Stack'

const IncreDecre = (eachCount) => {
    

    return ( 
        <Stack direction="row" spacing={2} alignItems="center">
            <IconButton size="small" variant="outlined" disabled={eachCount === 1} ><RemoveIcon fontSize="inherit"/></IconButton>
            <p>{eachCount}</p>
            <IconButton size="small" variant="outlined" ><AddIcon fontSize="inherit"/></IconButton>
            <Button size="small" variant="outlined" color="secondary" onClick={()=>RevomeFromCart(2)}>Remove</Button>
        </Stack>
     );
}
 
export default IncreDecre;