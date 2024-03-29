import {  Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { updateTotalQty } from '../../slices/shopItemSlice'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import IconButton from '@mui/material/IconButton'


const CheckOutBtn = () => {
    const dispath = useDispatch()
    const { quantityInCart } = useSelector(store=>store.shopItemSlice)
    useEffect(()=>{
        dispath(updateTotalQty()),[]
    })

    return ( 
    <Link to='/checkout'>
        <IconButton sx={{ p: 0 }} size="small">
            <ShoppingCartIcon fontSize="inherit" />
            {quantityInCart ? <div className="amount-container">
                <p className="total-amount">{quantityInCart}</p>
            </div> : null}
        </IconButton>
    </Link> );
}
 
export default CheckOutBtn;