import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
import Logo from '../component/Logo'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useSelector, useDispatch } from 'react-redux'
import { useRegisterMutation } from '../slices/userApiSlice'
import { setCredentials } from '../slices/authSlice'
import { toast } from 'react-toastify'

const SignUp = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { userInfo } = useSelector(store=>store.authSlice)
    const [ register, {isLoading} ] = useRegisterMutation()

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    
    useEffect(()=>{
        if(userInfo){
            navigate('/')
        }
    },[navigate, userInfo])

    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const res = await register({email, password}).unwrap()
            dispatch(setCredentials({...res}))
            navigate('/')
        }catch(err){
            toast.error(err.data)
            // backend res.json(err.message)
            // res.status(400).json('The User Exists')-if email exist
        }
    }

    return (  
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
            onSubmit={handleSubmit}
            >
                <Stack spacing={2}>
                    <TextField size="small" id="email" label="email" variant="outlined" value={email} onChange={changeEmail}/>
                    <TextField size="small" id="password" label="password" variant="outlined" value={password} onChange={changePassword}/>
                    <Button variant="contained" type='submit'>Sign Up</Button>
                    <Divider/>
                    <Stack direction='row' alignItems="center" spacing={1}>
                        <Typography variant="caption">Has an Account?</Typography>
                            <Link to='/auth'>
                            <Button>Log In</Button>
                            </Link> 
                    </Stack>
                    
                </Stack>
            </Box>
        </Grid>
     );
}
 
export default SignUp