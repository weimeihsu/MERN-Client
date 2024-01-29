import { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'

const TagDialog = ({openDialog, handleCloseDialog, handleSubmit}) => {
    
    return ( 
        <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Update this Tag?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            All the items using this tag will be updated as well.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSubmit} variant='contained' type='submit'>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
     );
}
 
export default TagDialog;