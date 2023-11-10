import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, increment, decrement, deleteCartItem } from '../../features/shopItemSlice'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'

const CheckOut = () => {
    const { currentCart } = useSelector(store => store.shopItemSlice)
    const dispatch = useDispatch()
    
    const incrementCounter = (item) => {
        dispatch(increment({count:item.quantity, id:item._id}))
    }
    const decrementCounter = (item) => {
        dispatch(decrement({count:item.quantity, id:item._id}))
    }
    const RevomeFromCart = (item) => {
        dispatch(deleteCartItem({id:item._id}))
    }
    
    return (
        <>
         {currentCart && currentCart.map(item=>(
            <Card className='card-gap' elevation={0} key={item._id}>
            <CardContent sx={{width:'100%'}}> 
            <Stack spacing={2} direction="row" justifyContent="space-between">
                <Typography variant="h5" component="div">{item.name}</Typography>
                <Typography variant="h6">${item.price}</Typography>
                
                <Stack direction="row" spacing={2} alignItems="center">
                    <IconButton size="small" variant="outlined" disabled={item.quantity === 1} onClick={()=>decrementCounter(item)}><RemoveIcon fontSize="inherit"/></IconButton>
                    <p>{item.quantity}</p>
                    <IconButton size="small" variant="outlined" onClick={()=>incrementCounter(item)}><AddIcon fontSize="inherit"/></IconButton>
                    <Button size="small" variant="outlined" color="secondary" onClick={()=>RevomeFromCart(item)}>Remove</Button>
                </Stack>
            </Stack>  
            </CardContent>
            </Card>
        ))}
        </> 
    );
}
 
export default CheckOut;