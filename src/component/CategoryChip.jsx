import Chip from '@mui/material/Chip'
import { useState } from 'react'
const CategoryChip = (item) => {
    const [colored, setColored] = useState()
    const toggleColor = () => {
       setColored(!colored)
        }
        // const coloredChip = {...categories[idx], isSelected: !selectedItem.isSelected}
        // const coloredCategories = [...categories]
        // coloredCategories[idx] = coloredChip
        
        // if(coloredCategories.includes(text)){
        //     console.log(text)
        //     state.filteredChips=state.filteredChips.filter(chip => chip !== text)
        // }else{state.filteredChips.push(text)}
        // setColored(coloredCategories)

    return ( 
        <>
        <Chip label={item.name} variant={colored ? 'filled':'outlined'} color='primary' onClick={toggleColor}></Chip>
        </>
     );
}
 
export default CategoryChip;