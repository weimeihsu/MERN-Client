import { useState, forwardRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, sumCost } from '../../features/shopItemSlice'

import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Snackbar from '@mui/material/Snackbar'
import Stack from '@mui/material/Stack'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MuiAlert from '@mui/material/Alert'
import Box from '@mui/material/Box'

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  })

const ShopItemCard = (item) => {
    const dispatch = useDispatch()
    const { countList } = useSelector(store => store.shopItemSlice)
    const [ buyCount, setBuyCount] = useState(1)
    const [ selectedItem, setSelectedItem ] = useState(item)
    const handleChange = (e) => {
        setBuyCount(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const theItem = { 
            _id: selectedItem._id,
            name: selectedItem.name,
            price: selectedItem.price, 
            quantity: buyCount,
            subCost: selectedItem.price*buyCount
        }
        dispatch(addToCart({shopItem:theItem}))
        dispatch(sumCost())
        setBuyCount(1)
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
    const handleAddToCart = (newSnackState) => {
        setSnackbarState({...newSnackState, open: true})
    }
   
    return (
        <Card className='card-gap' sx={{ display: 'flex', backgroundColor: '#badcd6' }} elevation={0}>
            <CardContent sx={{ flexGrow:1}}>   
                <Typography variant="h6" sx={{fontWeight: 'bold'}} >{item.name}</Typography>
                <Chip size="small" label={item.category}/>  
            </CardContent>
            <CardActions>
                <Stack spacing={2} >
                    <Typography variant="h6">${item.price}</Typography>
                    <Box component="form" onSubmit={handleSubmit}>
                    <FormControl sx={{ minWidth: 80 }} size='small'>
                        <Select
                        sx={{height:'32px' }}
                        value={buyCount}
                        onChange={handleChange}
                        displayEmpty
                        >
                        {countList.map((item, idx)=>(
                            <MenuItem key={idx} value={item}>{item}</MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    <Button onClick={()=>handleAddToCart({ vertical: 'top', horizontal: 'center' })} sx={{marginLeft:1}} type='submit' size="small" variant="contained" color="secondary">Add to Cart</Button>
                    </Box>
                    <Snackbar
                        anchorOrigin={{ vertical, horizontal }}
                        open={open}
                        key={vertical + horizontal}
                        autoHideDuration={1000}
                        onClose={handleClose}
                    >
                        <Alert severity="success">Item(s) Added!</Alert>
                    </Snackbar>
                </Stack>
            </CardActions>
        </Card>
    );
}
 
export default ShopItemCard;

// onClick={()=>handleAddToCart({ vertical: 'top', horizontal: 'center' })}