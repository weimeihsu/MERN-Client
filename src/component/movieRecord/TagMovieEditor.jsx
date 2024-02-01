import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useGetGenresQuery } from "../../slices/genreApiSlice"
import { filter, setSelectedGenre } from '../../slices/recordSlice'

import Chip from '@mui/material/Chip'
import DeleteIcon from '@mui/icons-material/Delete'

import MovieRecords from './MovieRecords'
import TagUpdate from './TagUpdate'


const TagMovieEditor = () => {
    const dispatch = useDispatch()
    const selectedGenreID = useSelector(state=>state.recordSlice.selectedGenre._id)
    const selectedGenreName = useSelector(state=>state.recordSlice.selectedGenre.name)
    const [ selected, setSelected ] = useState(selectedGenreID)
    
    const { data: genres=[], isLoading } = useGetGenresQuery()
    
    const getGenre = (genre) => { 
        setSelected(genre._id)
        dispatch(filter({ theGenre: genre.name }))
        dispatch(setSelectedGenre(genre))
    }

    return ( 
        <>
        {genres.map(item=>(
            <Chip key={item._id} onClick={() => getGenre(item)} label={item.name} variant={item._id === selectedGenreID ? 'filled' : 'outlined'} sx={{mr:1, mb:1}} onDelete={()=>handleDelete(item._id)} deleteIcon={<DeleteIcon fontSize='small'/>} />
        ))} 
        {selectedGenreName && <TagUpdate/>}
        <MovieRecords/>
        </>
     );
}
 
export default TagMovieEditor