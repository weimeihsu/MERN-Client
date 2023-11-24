import { Routes, Route } from "react-router-dom"

import CheckOut from '../pages/shoppingChart/CheckOut'
import CheckOutFailed from '../pages/shoppingChart/CheckOutFailed'
import CheckOutSuccess from '../pages/shoppingChart/CheckOutSuccess'

const CheckOutRoutes = () => {
    return ( 
        <Routes>
            <Route index element={<CheckOut/>}/>
            <Route path="checkout-failed" element={<CheckOutFailed/> } />
            <Route path="checkout-success" element={<CheckOutSuccess/> } />   
        </Routes>
     );
}
 
export default CheckOutRoutes;