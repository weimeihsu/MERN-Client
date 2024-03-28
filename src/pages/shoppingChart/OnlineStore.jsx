import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import CategoryChip from '../../component/ShoppingCart/CategoryChip'
import ShopItemCard from '../../component/ShoppingCart/ShopItemCard'
const OnlineStore = () => {
    
    const { shopItems, shopItemsLocal, categories } = useSelector(store => store.shopItemSlice)
    const [filter, setFilter] = useState(categories)
    return ( 
        <Container maxWidth="md">
             <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h5'>Online Store</Typography>
                    <Stack direction="row" spacing={1} mb={2}>
                    {filter.map((item, idx)=>(
                        <CategoryChip key={idx} {...item} />
                    ))}
                    </Stack>
                    {shopItemsLocal && shopItemsLocal.map(item=>(
                    <ShopItemCard key={item._id} {...item}/>    
                    ))}
                </Grid>
            </Grid>
        </Container>
       
     );
}
 
export default OnlineStore;