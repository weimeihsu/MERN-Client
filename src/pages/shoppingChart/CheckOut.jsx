import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { increment, decrement, deleteCartItem, sumCost } from '../../features/shopItemSlice'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import api from '../../axois/api'

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
        console.log(currentCart)
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
        <Container sx={{p:2, backgroundColor:'grey'}}>
            <Stack spacing={2} direction="row" justifyContent="space-between">
                <Typography variant="h5">Check Out</Typography>
            </Stack>
         {currentCart && currentCart.map(item=>(
            <Card className='card-gap' elevation={0} key={item._id}>
            <CardContent sx={{width:'100%'}}> 
            <Stack spacing={2} direction="row" justifyContent="space-between">
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
            </CardContent>
            </Card>
        ))}
        <Divider/>
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2} m={2}>
            <Button size="small" variant="contained">
                <Link to="/online-store">Continue Shopping</Link>
            </Button>
            <Typography variant="subtitle1">Total Cost :</Typography>
            <Typography variant="subtitle1" sx={{fontWeight:'bold'}}>${totalCost}</Typography>
            <Button size="small" variant="contained" onClick={handleCheckOut}>Next</Button>
        </Stack> 
        </Container>
    );
}
 
export default CheckOut;