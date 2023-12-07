import { useState } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
import Logo from '../component/Logo'

const SignUp = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    return ( 
        <>
        <Box sx={{ flexGrow: 1 }}>
        <header>
            <Toolbar>
                <Link to="/"><Logo/></Link>
            </Toolbar>
        </header>
        </Box>
        <Grid container
        direction="column"
        justifyContent="center"
        alignItems="center">
            
                <Typography variant="h5">Sign Up</Typography>
            
            <Box
            component="form"
            sx={{'& > :not(style)': { m: 1, minWidth: 320 }}}
            noValidate
            autoComplete="off"
            >
                <Stack direction='column' spacing={2}>
                    <TextField size="small" id="email" label="email" variant="outlined" value={email} onChange={changeEmail}/>
                    <TextField size="small" id="password" label="password" variant="outlined" value={password} onChange={changePassword}/>
                    <Button variant="contained" type='submit'>Sign Up</Button>
                    <Divider/>
                    <Button href='/login'>Log In</Button>
                </Stack>
            </Box>
        </Grid>
        </>
       
     );
}
 
export default SignUp