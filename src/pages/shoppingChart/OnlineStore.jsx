import { useState } from 'react'
import { useSelector } from 'react-redux'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import CategoryChip from '../../component/ShoppingCart/CategoryChip'
import ShopItemCard from '../../component/ShoppingCart/ShopItemCard'
const OnlineStore = () => {
    
    const { shopItemsLocal, categories } = useSelector(store => store.shopItemSlice)
    const [filter, setFilter] = useState(categories)
    return ( 
        <Container maxWidth="md">
            <Typography variant='h5'>Online Store</Typography>
            <Stack direction="row" spacing={1} mb={2}>
                {filter.map((item, idx)=>(
                    <CategoryChip key={idx} {...item} />
                ))}
            </Stack>
             <Grid container spacing={1}>
                {shopItemsLocal && shopItemsLocal.map(item=>(
                <Grid item xs={12} md={6} key={item._id}>  
                    <ShopItemCard {...item}/>  
                </Grid>  
                ))}
            </Grid>
        </Container>
       
     );
}
 
export default OnlineStore;