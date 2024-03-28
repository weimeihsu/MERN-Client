import { useSelector } from 'react-redux'

import EditTools from './EditTools'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

const MovieCard = ({_id, title, genre, img, createdAt}) => {
    const { selectedMainMenuName } = useSelector(state => state.navListSlice)
    const canEdit = Boolean(selectedMainMenuName === 'Movie Editor')

    return ( 
        <Box variant="outlined" sx={{padding:'8px 12px 8px 8px', border: '1px  solid #eeeeee'}}>
                <Stack direction="row" spacing={1} sx={{ minWidth: 0 }}>
                    <img src={img} alt={title}/>
                    <Stack spacing={1}>
                    <Typography variant="h6" sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: "1",
                        WebkitBoxOrient: "vertical",
                    }}>
                        {title}
                    </Typography>
                    <Chip label={genre} size="small" sx={{mr:1}}/>
                    <Typography variant="caption">
                        {createdAt}
                    </Typography>
                    </Stack>
                </Stack>
            {canEdit ? (<EditTools id={_id} title={title} genre={genre} img={img}/>):(null)}
        </Box>
     );
}
 
export default MovieCard;