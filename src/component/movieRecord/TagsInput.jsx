
import { toTitleCase } from '../../func/toTitleCase'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filter, setSelectedGenre } from '../../slices/recordSlice'
import { useGetGenresQuery, useAddGenreMutation } from '../../slices/genreApiSlice'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormHelperText from '@mui/material/FormHelperText'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { StyledListItemButton } from '../../customStyle/CustomComponent'

const TagsInputs = () => {
    const dispatch = useDispatch()
    const { selectedGenre } = useSelector(state=>state.recordSlice)
    const [ selected, setSelected ] = useState(selectedGenre)
    const [ trackedValue, setTrackedValue ] = useState('')
    const { data: genres=[], isLoading } = useGetGenresQuery()
    const [ addGenre ] = useAddGenreMutation()
    useEffect(()=>{
        setSelected(selectedGenre)
    },[selectedGenre])

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
    const getGenre = (genre) => { 
        setSelected(genre._id)
        dispatch(filter({ theGenre: genre.name }))
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
                <ListItem sx={{padding:'4px 0'}} key={item._id} onClick={() => getGenre(item)}>
                <StyledListItemButton
                selected={selected === item._id}
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