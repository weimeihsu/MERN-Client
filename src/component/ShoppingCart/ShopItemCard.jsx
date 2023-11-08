import { useState, forwardRef } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/shopItemSlice'

import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Snackbar from '@mui/material/Snackbar'
import Stack from '@mui/material/Stack'
import MuiAlert from '@mui/material/Alert'

import CountSelect from './CountSelect'

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  })

const ShopItemCard = (item) => {

    const dispatch = useDispatch()
    const [count, setCount] = useState(1)
    const handleChange = (e) => {
        setCount(e.target.value)
    }
    const [snackBarState, setSnackbarState] = useState({
        open:false,
        vertical:'top',
        horizontal: 'center'
    })
    const {open, vertical, horizontal} = snackBarState
    
    const handleClose = () => {
        setSnackbarState({...snackBarState, open: false})
    }
    const handleAddToCart = (shopItem, count, newSnackState) => {
        dispatch(addToCart({shopItem, count}))
        setCount(0)
        setSnackbarState({...newSnackState, open: true})
    }
    return (
        <Card className='card-gap' sx={{ display: 'flex', backgroundColor: '#badcd6' }} elevation={0}>
            <CardContent sx={{ flexGrow:1}}>   
                <Typography variant="h5" component="div">{item.name}</Typography>
                <Chip size="small" label={item.category}/>
                
            </CardContent>
            <CardActions>
                <Stack spacing={2} alignItems="flex-end">
                    <Typography variant="h6">${item.price}</Typography>
                    <CountSelect count={count} handleChange={handleChange}/>
                    <Button size="small" variant="contained" color="secondary" onClick={()=>handleAddToCart(item, count, { vertical: 'top', horizontal: 'center' })}>Add to Cart</Button>
                    <Snackbar
                        anchorOrigin={{ vertical, horizontal }}
                        open={open}
                        key={vertical + horizontal}
                        autoHideDuration={1000}
                        onClose={handleClose}
                    >
                        <Alert severity="success">This is a success message!</Alert>
                    </Snackbar>
                </Stack>
            </CardActions>
        </Card>
    );
}
 
export default ShopItemCard;