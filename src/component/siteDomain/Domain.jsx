import { Link } from 'react-router-dom'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import { StyledListItemButton } from '../../customStyle/CustomComponent'

const Domain = ({recordItem, selected, getDomain, handleDelete}) => {
    return ( 
        <Link key={recordItem._id} to={`${recordItem.sitename}/${recordItem.domainname}`} >
            <ListItem sx={{padding:'4px 0'}}>
            <StyledListItemButton
            onClick={()=>getDomain(recordItem.domainname)}
            selected={selected === recordItem.domainname}
            >
              <ListItemText primary={recordItem.domainname} />

              <IconButton size="small" aria-label="delete" onClick={(e) => handleDelete(e, recordItem._id)}>
                <DeleteIcon fontSize="inherit"/>
              </IconButton>
            </StyledListItemButton>
            </ListItem>
        </Link>
     );
}
 
export default Domain;