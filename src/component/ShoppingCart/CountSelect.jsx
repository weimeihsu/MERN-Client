import { useSelector } from 'react-redux'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const CountSelect = ({handleChange, buyCount}) => {
    const { countList } = useSelector(store => store.shopItemSlice)

    return ( 
        <>
        <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
        <Select
          value={buyCount}
          onChange={handleChange}
          displayEmpty
        >
          {countList.map((item, idx)=>(
            <MenuItem key={idx} value={item}>{item}</MenuItem>
          ))}
        </Select>
        </FormControl>
        </>
     );
}
 
export default CountSelect;