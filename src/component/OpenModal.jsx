import { useState } from 'react'
import RecordForm from './recordForm'
import Modal from '@mui/material/Modal'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import Box from '@mui/material/Box'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius:'4px',
    px: 4,
    pb: 4
  };

const OpenModal = ({_id, title, category}) => {

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
        aria-labelledby="modal-recordForm"
        aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <RecordForm recordID={_id} recordTitle={title} recordCategory={category} formTitle={'Movie Update'} btnText={'Update'}/>
            </Box>
        </Modal>
        </>  
    );
}
 
export default OpenModal;