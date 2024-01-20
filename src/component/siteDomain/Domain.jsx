import { Link } from 'react-router-dom'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'

const Domain = ({recordItem, selected, getDomain, handleDelete}) => {
    return ( 
        <Link key={recordItem._id} to={`${recordItem.sitename}/${recordItem.domainname}`} >
                  <ListItem sx={{padding:'4px 0'}}>
                  <ListItemButton
                  onClick={()=>getDomain(recordItem.domainname)}
                  selected={selected === recordItem.domainname}
                  sx={{border: '1px solid ',
                  borderColor: 'secondary.light',
                  borderRadius: 1,
                  '&:hover': {
                    backgroundColor: 'secondary.light',
                    color:'secondary.contrastText'
                  },
                  '&.Mui-selected, && .Mui-selected:hover': {
                    backgroundColor: 'secondary.light',
                    color:'secondary.contrastText',
                    '&:hover':{
                        backgroundColor: 'secondary.light',
                        color:'secondary.contrastText'
                    }
                  }  
                  }}>
                    <ListItemText primary={recordItem.domainname} />

                    <IconButton size="small" aria-label="delete" onClick={(e) => handleDelete(e, recordItem._id)}>
                      <DeleteIcon fontSize="inherit"/>
                    </IconButton>
                  </ListItemButton>
                  </ListItem>
                </Link>
     );
}
 
export default Domain;