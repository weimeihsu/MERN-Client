import { useSelector } from 'react-redux'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import IconButton from '@mui/material/IconButton'

const CheckOutBtn = () => {
    const { amount } = useSelector(store=>store.shopItemSlice)
    const handleCheckOut = () => {
        console.log('checkout')
    }
    return ( 
    <>
        <IconButton onClick={handleCheckOut} sx={{ p: 0, color: 'white' }} size="large">
            <ShoppingCartIcon/>
            <div className="amount-container">
                <p className="total-amount">{amount}</p>
            </div>
        </IconButton>
    </> );
}
 
export default CheckOutBtn;