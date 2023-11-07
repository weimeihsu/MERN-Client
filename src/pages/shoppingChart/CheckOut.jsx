import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../features/shopItemSlice'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'

const CheckOut = () => {
    const { itemsInCart } = useSelector(store => store.shopItemSlice)
    const dispatch = useDispatch()
    const [count, setCount] = useState(0)
    const incrementCounter = () => {
        setCount(count + 1)
    }
    const decrementCounter = () => {
        if(count > 1){
            setCount(count - 1)}
    }

    const RevomeFromCart = (shopItem) => {
       console.log(shopItem+'item removed')
    }
    return (
        <>
         {itemsInCart && itemsInCart.map(item=>(
            <Card className='card-gap' elevation={0} key={item._id}>
            <CardContent sx={{width:'100%'}}> 
            <Stack spacing={2} direction="row" justifyContent="space-between">
                <Typography variant="h5" component="div">{item.name}</Typography>
                <Typography variant="h6">${item.price}</Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                    <IconButton size="small" variant="outlined" disabled={count === 1} onClick={decrementCounter}><RemoveIcon fontSize="inherit"/></IconButton>
                    <p>{count}</p>
                    <IconButton size="small" variant="outlined" onClick={incrementCounter}><AddIcon fontSize="inherit"/></IconButton>
                    <Button size="small" variant="outlined" color="secondary" onClick={()=>RevomeFromCart(item, count)}>Remove</Button>
                </Stack>
            </Stack>  
            </CardContent>
            </Card>
        ))}
        </> 
    );
}
 
export default CheckOut;