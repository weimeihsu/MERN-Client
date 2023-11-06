import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import { Stack } from '@mui/material'

const ShopItemCard = (item) => {
    const [count, setCount] = useState(0)
    const incrementCounter = () => setCount(count + 1)
    const decrementCounter = () => setCount(count - 1)

    const handleAddToCart = (item) => {
        const itemAmount = count
        console.log(itemAmount, item)
    }
    return (
        <Card className='card-gap' sx={{ display: 'flex', backgroundColor: '#badcd6' }} elevation={0}>
            <CardContent sx={{ flexGrow:1}}>   
                <Typography variant="h5" component="div">{item.name}</Typography>
                <Chip size="small" label={item.category}/>
                <Typography variant="h6">{item.price}</Typography>
            </CardContent>
            <CardActions>
                <Stack spacing={2} alignItems="flex-end">
                    <Stack direction="row" spacing={2} alignItems="center">
                        <IconButton size="small" variant="outlined" onClick={decrementCounter}><RemoveIcon fontSize="inherit"/></IconButton>
                        <p>{count}</p>
                        <IconButton size="small" variant="outlined" onClick={incrementCounter}><AddIcon fontSize="inherit"/></IconButton>
                    </Stack>

                    <Button size="small" variant="contained" color="secondary" onClick={()=>handleAddToCart(item)}>Add to Cart</Button>
                </Stack>
            </CardActions>
        </Card>
    );
}
 
export default ShopItemCard;