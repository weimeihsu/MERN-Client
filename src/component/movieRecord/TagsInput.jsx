
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormHelperText from '@mui/material/FormHelperText'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { StyledListItemButton } from '../../customStyle/CustomComponent'
import { toTitleCase } from '../../func/toTitleCase'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filter, setSelectedGenre } from '../../slices/recordSlice'
import { useGetGenresQuery, useAddGenreMutation } from '../../slices/genreApiSlice'

const TagsInputs = () => {
    const dispatch = useDispatch()
    const { selectedGenre } = useSelector(state=>state.recordSlice)
    const [ trackedValue, setTrackedValue ] = useState('')
    const { data: genres=[], isLoading } = useGetGenresQuery()
    const [ addGenre ] = useAddGenreMutation()
    const [ selected, setSelected ] = useState(selectedGenre)
    // const [ newGenre, serNewGenre ] = useState('')
    const handleChange = (e) => {
        setTrackedValue(e.target.value)
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter'){
            const genre = toTitleCase(trackedValue)
            try{
                const res = addGenre({ name: genre }).unwrap
                // dispatch(setCredentials({...res}))
                }catch(err){
                    console.log(err?.data?.message || err.error)
                }
                setTrackedValue('')
        }
        
    }
    const handleEdit = (genre) => { 
        setSelected(genre)
        dispatch(filter({ theGenre: genre }))
        dispatch(setSelectedGenre(genre))
    }
    return ( 
        <>
        <FormControl size="small" sx={{marginTop:1}}>
            <OutlinedInput
            id="component-outlined" 
            placeholder="Type in Category..."
            value={trackedValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            />
            <FormHelperText id="component-helper-text">
            Press enter to create
            </FormHelperText>
        </FormControl>
        <List>
            {genres.map(item=>(
                <ListItem sx={{padding:'4px 0'}} key={item._id} onClick={() => handleEdit(item.name)}>
                <StyledListItemButton
                selected={selected === item.name}
                >
                  <ListItemText primary={item.name} />
                  <IconButton size="small" aria-label="delete" >
                    <EditIcon fontSize="inherit"/>
                  </IconButton>
                </StyledListItemButton>
                </ListItem>
            ))} 
        </List>
        </>
     );
}
 
export default TagsInputs;