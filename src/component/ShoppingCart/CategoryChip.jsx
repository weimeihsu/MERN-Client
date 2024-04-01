import Chip from '@mui/material/Chip'
import { useState } from 'react'
const CategoryChip = (item) => {
    const [colored, setColored] = useState()
    const toggleColor = () => {
       setColored(!colored)
        }
       
    return ( 
        <>
        <Chip label={item.name} variant={colored ? 'filled':'outlined'} color='primary' onClick={toggleColor} size='small'></Chip>
        </>
     );
}
 
export default CategoryChip;