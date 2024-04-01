import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, deleteCartItem, sumCost } from '../../slices/shopItemSlice'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import Stack from '@mui/material/Stack'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Divider from '@mui/material/Divider'
import api from '../../axois/api'
import { ThemeProvider } from '@mui/material/styles'
import { mainTheme } from '../../mainTheme'

const CheckOut = () => {
    const { currentCart, totalCost } = useSelector(store => store.shopItemSlice)
    const dispatch = useDispatch()
    
    const incrementCounter = (item) => {
        dispatch(increment({count:item.quantity, 
                            id:item._id, 
                            subcost:item.subCost+item.price}))
        dispatch(sumCost())
    }
    const decrementCounter = (item) => {
        dispatch(decrement({count:item.quantity, 
                            id:item._id, 
                            subcost:item.subCost-item.price}))
        dispatch(sumCost())
    }
    const RevomeFromCart = (item) => {
        dispatch(deleteCartItem({id:item._id}))
        dispatch(sumCost())
    }
    const handleCheckOut = async () => {
        try{
            const result = await api.post('/api/checkout', currentCart)
            // console.log(result) 
            if(result.data.url){
                window.location.href=result.data.url
            }
        }catch(err){
            err.message
        }
    }
    
    return (
        <ThemeProvider theme={mainTheme}>
            <Container maxWidth="md">
            <Stack spacing={1} direction="row" justifyContent="space-between" alignItems="center" sx={{borderBottom:'solid thin', borderColor: (theme) => theme.palette.neutral.light, py:1,}}>
                <Link to='/online-store'>
                    <Button size="small" variant="outlined" startIcon={<ArrowBackIcon />}>
                        Continue Shopping
                    </Button>
                </Link>
                <Typography variant='h6'>Check Out</Typography>
            </Stack>
                
            {currentCart && 
            currentCart.map(item=>(
                <Stack spacing={1} direction="row" justifyContent="space-between" sx={{mb:2}}>
                    <Typography variant="subtitle1" component="div">{item.name}</Typography>
                    <Typography variant="subtitle1">${item.price}</Typography>
                    
                    <Stack direction="row" spacing={2} alignItems="center">
                        <IconButton size="small" variant="outlined" disabled={item.quantity === 1} onClick={()=>decrementCounter(item)}><RemoveIcon fontSize="inherit"/></IconButton>
                        <p>{item.quantity}</p>
                        <IconButton size="small" variant="outlined" onClick={()=>incrementCounter(item)}><AddIcon fontSize="inherit"/></IconButton>
                        <Button size="small" variant="outlined" color="secondary" onClick={()=>RevomeFromCart(item)}>Remove</Button>
                    </Stack>

                    <Typography variant="subtitle1" sx={{fontWeight:'bold'}}>${item.subCost}</Typography>
                </Stack>  
            ))}

            <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                <Typography variant="subtitle1">Total Cost :</Typography>
                <Typography variant="subtitle1" sx={{fontWeight:'bold'}}>${totalCost}</Typography>
                <Button size="small" variant="contained" onClick={handleCheckOut}>Next</Button>
            </Stack> 
            </Container>
        </ThemeProvider>
        
        
    );
}
 
export default CheckOut;