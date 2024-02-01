import { styled } from '@mui/material/styles'
import { mainTheme } from '../mainTheme'
import ListItemButton from '@mui/material/ListItemButton'

const drawerWidth = 240;

const CustomMain = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })
  (({ theme, open }) => ({
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `${drawerWidth}px`,
  ...(open && {
      transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const MainHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const StyledListItemButton = styled(ListItemButton)(({ theme })=>({
  border: '1px solid',
  borderColor: theme.palette.secondary.light,
  borderRadius: 2,
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.contrastText
  },
  '&.Mui-selected, && .Mui-selected:hover': {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.contrastText,
    '&:hover':{
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.contrastText
    }
  }
}))

const LightBgBox = styled('div')(({theme})=>({
  backgroundColor: theme.palette.secondary.light,
  borderRadius: '4px',
  padding: theme.spacing(2),
  marginBottom:theme.spacing(2)
}))

const WhtBgBox = styled('div')(({theme})=>({
  backgroundColor: theme.palette.neutral.wht,
  borderRadius: '4px',
  padding: theme.spacing(2),
  marginBottom:theme.spacing(2),
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
}))

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
export { CustomMain, MainHeader, StyledListItemButton, LightBgBox, WhtBgBox, VisuallyHiddenInput }