import { createContext, useState } from "react"
import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
    
    palette: {
        primary: {
            main: '#009688',
            light: '#42a5f5',
            dark: '#1565c0',
            contrastText: '#fff',
        }
    },
    components:{
        MuiListItemButton: {
            styleOverrides: {
                root:{
                    borderRadius:4,
                    '&:hover': {
                        backgroundColor: '#009688',
                        color: 'white',
                      },
                    '&.Mui-selected, && .Mui-selected:hover': {
                        backgroundColor: '#009688',
                        color: 'white',
                        '&:hover':{
                            backgroundColor: '#009688',
                            color: 'white',
                        }
                      }  
                },
            }
        }
    }
  });