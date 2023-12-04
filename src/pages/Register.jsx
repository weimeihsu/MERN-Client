import { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'


const Register = () => {
    const [ email, setEmail ] = useState()
    const [ password, setPassword ] = useState()
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }
    const backToHome = (e) =>{
        console.log('go back home')
    }
    return ( 
        <Grid container
        direction="column"
        justifyContent="center"
        alignItems="center">
            <Stack direction="row" alignItems="center">
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={backToHome}
                    edge="start"
                    sx={{ mr: 2 }}
                >
                    <ArrowBackIcon />
                </IconButton>
                <h1>Create an Account</h1>
            </Stack>
            <Box
            component="form"
            sx={{'& > :not(style)': { m: 1, minWidth: 320 }}}
            noValidate
            autoComplete="off"
            >
                <Stack direction='column' spacing={2}>
                    <TextField size="small" id="email" label="Outlined" variant="outlined" value={email} onChange={changeEmail}/>
                    <TextField size="small" id="password" label="Outlined" variant="outlined" value={password} onChange={changePassword}/>
                    <Button variant="contained" type='submit'>Create an account</Button>
                    <Divider/>
                    <Button>Sign In</Button>
                </Stack>
            </Box>
        </Grid>
     );
}
 
export default Register