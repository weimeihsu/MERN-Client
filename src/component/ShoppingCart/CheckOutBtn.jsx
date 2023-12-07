import { useNavigate , Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { updateTotalQty } from '../../slices/shopItemSlice'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import IconButton from '@mui/material/IconButton'


const CheckOutBtn = () => {
    const navigate = useNavigate()
    const dispath = useDispatch()
    const { quantityInCart } = useSelector(store=>store.shopItemSlice)
    useEffect(()=>{
        dispath(updateTotalQty()),[]
    })
    const handleCheckOut = () => {
        navigate('/checkout')
    }
    return ( 
    <>
        <IconButton onClick={handleCheckOut} sx={{ p: 0, color: 'white' }} size="large">
            <ShoppingCartIcon/>
            {quantityInCart ? <div className="amount-container">
                <p className="total-amount">{quantityInCart}</p>
            </div> : null}
        </IconButton>
    </> );
}
 
export default CheckOutBtn;