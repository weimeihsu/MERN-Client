import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useLoginMutation } from '../slices/userApiSlice'
import { setCredentials } from '../slices/authSlice'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
import Logo from '../component/Logo'

const LogIn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [ login, {isLoading} ] = useLoginMutation()
    const { userInfo } = useSelector(store=>store.authSlice)
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        // const user = { email, password }
        try {
            const res = await login({email, password}).unwrap()
            dispatch(setCredentials({...res}))
            navigate('/')
        } catch(err){
           console.log(err?.data?.message || err.error)
        }
    }
    useEffect(()=>{
        if(userInfo){
            navigate('/')
        }
    },[navigate, userInfo])
    return ( 
        <>
        <header>
            <Toolbar>
                <Link to="/"><Logo/></Link>
            </Toolbar>
        </header>
        <Grid container
        direction="column"
        justifyContent="center"
        alignItems="center">
            <Typography variant="h5">Log In</Typography>
            <Box
            component="form"
            sx={{'& > :not(style)': { m: 1, minWidth: 320 }}}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            >
                <Stack direction='column' spacing={2}>
                    <TextField size="small" id="email" label="email" variant="outlined" value={email} onChange={changeEmail}/>
                    <TextField size="small" id="password" label="password" variant="outlined" value={password} onChange={changePassword}/>
                    <Button variant="contained" type='submit'>Log In</Button>
                    <Divider/>
                    <Link to='/signup'>
                        <Button>Sign up</Button>
                    </Link>
                </Stack>
            </Box>
        </Grid>
        </>
     );
}
 
export default LogIn