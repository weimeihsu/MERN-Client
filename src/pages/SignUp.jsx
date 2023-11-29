import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useState } from 'react'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import TopNavBar from '../component/TopNavBar'

const SignUp = () => {
    const [ email, setEmail ] = useState()
    const [ password, setPassword ] = useState()
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }
    return ( 
        <>
         <TopNavBar/>
            <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center">
                <h1>Sign Up</h1>
                <Box
                component="form"
                sx={{'& > :not(style)': { m: 1, width: '25ch' }}}
                noValidate
                autoComplete="off"
                >
                    <Stack direction='column' spacing={2}>
                        <TextField size="small" id="email" label="Outlined" variant="outlined" value={email} onChange={changeEmail}/>
                        <TextField size="small" id="password" label="Outlined" variant="outlined" value={password} onChange={changePassword}/>
                        <Button variant="contained" type='submit'>Sign In</Button>
                    </Stack>
                </Box>
            </Grid>
        </>
       
     );
}
 
export default SignUp