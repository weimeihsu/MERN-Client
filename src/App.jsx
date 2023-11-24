import Routers from './routers/Routers'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import Box from '@mui/material/Box'
import { styled, ThemeProvider } from '@mui/material/styles'
import { theme } from './theme'

import NavBar from './component/NavBar'
import LeftDrawer from './component/LeftDrawer'


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })
  (({ theme, open }) => ({
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
      transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const App = () => {
  const location = useLocation()
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  }
  const hideMenu =() =>{
    const { pathname } = location
    return !pathname.includes("/checkout")
  }
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ display: 'flex' }}>
      { hideMenu() && [
        <LeftDrawer key={1} drawerWidth={drawerWidth} toggleDrawer={toggleDrawer} open={open}/>, <NavBar key={2} toggleDrawer={toggleDrawer} open={open}/>
      ]}
      <Main open={open} sx={{paddingTop: hideMenu() ? theme.spacing(8): null}}>
          <Routers/>
      </Main>
    </Box>
    </ThemeProvider>
  )
}

export default App
