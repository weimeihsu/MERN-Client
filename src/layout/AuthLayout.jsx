import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import TopNavBar from '../component/TopNavBar'
import { StyledHeaderHeight } from '../customStyle/CustomComponent'
import { ThemeProvider } from '@mui/material/styles'
import { mainTheme } from '../mainTheme'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const AuthLayout = () => {
    const navigate = useNavigate()
    const toHome = () => {
        navigate('/')
    }
    const isLoginHeader = Boolean(true)
    return ( 
        <ThemeProvider theme={mainTheme}>
            <TopNavBar OptionIcon={<ArrowBackIcon />} toHome={toHome} isLoginHeader={isLoginHeader}/>
        
            <StyledHeaderHeight/>
            <Outlet/>
        
        </ThemeProvider>
     );
}
 
export default AuthLayout;