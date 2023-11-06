import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchShopItems } from '../../features/shopItemSlice'

import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'

import CategoryChip from '../../component/CategoryChip'
import ShopItemCard from '../../component/ShopItemCard'
const OnlineStore = () => {
    const dispatch = useDispatch()

    // useEffect(()=>{
    //     dispatch(fetchShopItems())
    // },[])
    const { shopItems, shopItemsLocal, categories } = useSelector(store => store.shopItemSlice)
    const [filter, setFilter] = useState(categories)

    return ( 
        <Container>
            <h1>Online Store</h1>
            <Stack direction="row" spacing={1} mb={2}>
            {filter.map((item, idx)=>(
                <CategoryChip key={idx} {...item} />
            ))}
            </Stack>
            {shopItemsLocal && shopItemsLocal.map(item=>(
                <ShopItemCard key={item._id} {...item}/>    
            ))}
        </Container>
     );
}
 
export default OnlineStore;