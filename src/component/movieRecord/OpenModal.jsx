import { useState } from 'react'
import MovieForm from './MovieForm'
import Modal from '@mui/material/Modal'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import Box from '@mui/material/Box'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    borderRadius:'4px',
    px: 4,
    pb: 4
  };

const OpenModal = ({id, title, genre}) => {

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return ( 
        <>
        <IconButton size="small" aria-label="edit" onClick={handleOpen}>
            <EditIcon fontSize="inherit"/>
        </IconButton>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-MovieForm"
        aria-describedby="modal-description"
        >
            <Box sx={style}> 
                <MovieForm recordID={id} recordTitle={title} recordGenre={genre} formTitle={'Movie Update'} btnText={'Update'} closeForm={handleClose}/>
            </Box>
        </Modal>
        </>  
    );
}
 
export default OpenModal;