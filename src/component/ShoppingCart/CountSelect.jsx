import { useSelector } from 'react-redux'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const CountSelect = ({handleChange, count}) => {
    const { countList } = useSelector(store => store.shopItemSlice)

    return ( 
        <>
        <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
        <Select
          value={count}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {countList.map((item, idx)=>(
            <MenuItem key={idx} value={item}>{item}</MenuItem>
          ))}
        </Select>
        </FormControl>
        </>
     );
}
 
export default CountSelect;