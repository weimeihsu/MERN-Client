import { createTheme } from '@mui/material/styles'

export const colorToken = {
    primary: {
        main: '#009688',
        light: '#badcd6',
        dark: '#00695f',
        contrastText: '#fff',
    },
    secondary:{
        main: '#ff9100',
        light:'#ffa733',
        dark:'#b26500'
    },
    
}
export const theme = createTheme({ 
    typography: {
        h5:{
            fontSize:'1.5rem',
        },
        h6:{
            fontSize:'1rem',
        },
        subtitle1: {
            fontSize: '0.875rem',
          },
    },
    palette: {
        primary: {
            main: colorToken.primary.main,
            light: colorToken.primary.light,
            dark: colorToken.primary.dark,
            contrastText: colorToken.primary.contrastText,
        },
        secondary:{
            main: colorToken.secondary.main,
            light: colorToken.secondary.light,
            dark: colorToken.secondary.dark
        }
    },
    components:{
        MuiListItemButton: {
            styleOverrides: {
                root:{
                    borderRadius:4,
                    color: colorToken.primary.dark,
                    padding: '2px 16px',
                    '&:hover': {
                        backgroundColor: colorToken.primary.main,
                        color: 'white',
                      },
                    '&.Mui-selected, && .Mui-selected:hover': {
                        backgroundColor: colorToken.primary.main,
                        color: 'white',
                        '&:hover':{
                            backgroundColor: colorToken.primary.main,
                            color: 'white',
                        }
                      }  
                },
            }
        },
        MuiMenuItem:{
            styleOverrides:{
                root:{
                    color: colorToken.primary.dark,
                }
            }
        },
        MuiCardActions:{
            styleOverrides:{
                root: { padding: '16px' }
            }
        },
        MuiIconButton:{
            variants: [
                {
                    props: { variant: 'outlined' },
                    style: {
                        border:`1px solid rgba(0, 0, 0, 0.2)`
                    }
                }
            ]
        },
        MuiFormControl:{
            styleOverrides:{
                root: { margin: '0px' }
            }
        }
        
    }
  });