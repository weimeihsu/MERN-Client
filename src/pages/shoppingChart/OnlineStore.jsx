import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchShopItems } from '../../features/shopItemSlice'

import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'

import CategoryChip from '../../component/CategoryChip'
const OnlineStore = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchShopItems())
    },[])
    const { categories } = useSelector(store=>store.shopItemSlice)
    const { shopItems } = useSelector(store => store.shopItemSlice)
    const [filter, setFilter] = useState(categories)

    return ( 
        <Container>
            <h1>Online Store</h1>
            <Card>
                <CardContent>
                    <Typography variant="body1" gutterBottom mr={2}>3<span>items in the card</span></Typography>
                </CardContent>
                <CardActions>
                    <Button variant="outlined">Check Out</Button>
                </CardActions>
            </Card>
            
            <Stack direction="row" spacing={1}>
            {filter.map((item, idx)=>(
                <CategoryChip key={idx} {...item} />
            ))}
            </Stack>
            {shopItems && shopItems.map(item=>(
                <Card key={item._id}>
                    <CardContent>{item.name}<Chip size="small" label={item.category}/></CardContent>
                </Card>
            ))}
        </Container>
     );
}
 
export default OnlineStore;