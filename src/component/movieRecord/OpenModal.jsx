import { useState } from 'react'
import MovieForm from './MovieForm'
import Modal from '@mui/material/Modal'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import { WhtBgBox } from '../../customStyle/CustomComponent'


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
            <WhtBgBox> 
                <MovieForm recordID={id} recordTitle={title} recordGenre={genre} formTitle={'Movie Update'} btnText={'Update'} closeForm={handleClose}/>
            </WhtBgBox>
        </Modal>
        </>  
    );
}
 
export default OpenModal;