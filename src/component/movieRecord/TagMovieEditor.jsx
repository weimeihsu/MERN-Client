import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useGetGenresQuery, useDeleteGenreMutation } from "../../slices/genreApiSlice"
import { useGetRecordsQuery } from '../../slices/recordApiSlice'
import { filter, setSelectedGenre } from '../../slices/recordSlice'

import Chip from '@mui/material/Chip'
import DeleteIcon from '@mui/icons-material/Delete'
import Grid from '@mui/material/Grid'

import MovieRecords from './MovieRecords'
import TagUpdate from './TagUpdate'
import MovieCard from './MovieCard'


const TagMovieEditor = () => {
    const dispatch = useDispatch()
    const selectedGenreID = useSelector(state=>state.recordSlice.selectedGenre._id)
    const selectedGenreName = useSelector(state=>state.recordSlice.selectedGenre.name)
    const [ selected, setSelected ] = useState(selectedGenreID)
    
    const { data: genres=[], isLoading } = useGetGenresQuery()

    const { data: filteredRecords=[] } = useGetRecordsQuery({selectedGenreName})
    
    const [ deleteGenre ] = useDeleteGenreMutation() 

    const getGenre = (genre) => { 
        setSelected(genre._id)
        dispatch(filter({ theGenre: genre.name }))
        dispatch(setSelectedGenre(genre))
    }
    const handleDelete = (id) => {
        deleteGenre({id})
    }
    return ( 
        <>
        <div>
        {genres.map(item=>(
            <Chip size="small" key={item._id} onClick={() => getGenre(item)} label={item.name} variant={item._id === selected ? 'filled' : 'outlined'} sx={{mr:1, mb:1}} onDelete={()=>handleDelete(item._id)} deleteIcon={<DeleteIcon/>} />
        ))} 
        </div>
        
        {selectedGenreName && <TagUpdate/>}
        <Grid container spacing={1}>
            {filteredRecords && filteredRecords.map(recordItem=>(
                <Grid item xs={12} md={6} key={recordItem._id}>
                    <MovieCard {...recordItem}/>
                </Grid>
            ))} 
        </Grid> 
        {/* <MovieRecords/> */}
        </>
     );
}
 
export default TagMovieEditor