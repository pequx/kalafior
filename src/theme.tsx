import '@fontsource/poppins/100.css'
import '@fontsource/poppins/200.css'
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import { Theme, createTheme } from '@mui/material/styles';
import settings from './config/settings.json'

const theme:Theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontWeight: 400,
      fontSize: '3rem',
      lineHeight: '116.7%',
      letterSpacing: '0.25px',
      fontStyle: 'normal',
      textRendering: 'geometricPrecision',
      marginBottom: '1.5rem',
      textAlign: 'center'
    },
    h2: {
      fontWeight: 200,
      fontSize: '2rem',
      lineHeight: '123.5%',
      letterSpacing: '0.25px',
      fontStyle: 'normal',
      textRendering: 'geometricPrecision',
      marginBottom: '1.5rem',
      textAlign: 'center'
    },
    h3: {
      fontWeight: 400,
      fontSize: '1.75rem',
      lineHeight: '123.5%',
      letterSpacing: '0.25px',
      fontStyle: 'normal',
      textRendering: 'geometricPrecision',
      marginBottom: '1.5rem'
    },
    h4: {
      fontWeight: 400,
      fontSize: '1.5rem',
      lineHeight: '160%',
      letterSpacing: '0.15px',
      fontStyle: 'normal',
      textRendering: 'geometricPrecision',
      marginBottom: '1.5rem'
    },
    h5: {
      fontWeight: 400,
      fontSize: '1.5rem',
      lineHeight: '160%',
      letterSpacing: '0.15px',
      fontStyle: 'normal',
      textRendering: 'geometricPrecision',
      marginBottom: '1.5rem'
    },
    subtitle1: {
      fontWeight: 200,
      fontSize: '1rem',
      lineHeight: '175%',
      letterSpacing: '0.15px',
      fontStyle: 'normal',
      textRendering: 'geometricPrecision'
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '157%%',
      letterSpacing: '0.1px',
      fontStyle: 'normal',
      textRendering: 'geometricPrecision'
    },
    body1: {
      fontWeight: 200,
      fontSize: '1.25rem',
      lineHeight: '150%',
      letterSpacing: '0.15px',
      fontStyle: 'normal',
      textRendering: 'geometricPrecision'
    },
    body2: {
      fontWeight: 300,
      fontSize: '1rem',
      lineHeight: '150%',
      letterSpacing: '0.15px',
      fontStyle: 'normal',
      textRendering: 'geometricPrecision'
    },
  },
  palette: {
    primary: {
      main: settings.color.spoolBlue,
    },
    secondary: {
      main: settings.color.spoolGreen,
    },
    gradientGreen: {
      main: 'radial-gradient(32.18% 80.24% at 100% 0%, rgba(0, 255, 179, 0.3) 0%, rgba(24, 242, 177, 0) 100%), radial-gradient(27.04% 67.42% at 1.15% 98.13%, rgba(207, 216, 220, 0.5) 0%, rgba(87, 98, 112, 0) 100%);'
    },
    gradientBlue: {
      main: 'radial-gradient(32.18% 80.24% at 100% 0%, rgba(35, 179, 229, 0.3) 0%, rgba(35, 179, 229, 0) 100%), radial-gradient(27.04% 67.42% at 1.15% 98.13%, rgba(207, 216, 220, 0.3) 0%, rgba(87, 98, 112, 0) 100%)'
    },
    gradientBlueGreen: {
      main: `linear-gradient(90deg, ${settings.color.spoolGreen} 0%, ${settings.color.spoolBlue} 100%);`
    },
    gradientDarkBlue: {
      main: 'linear-gradient(227.49deg, #23B3E5 15.94%, #576270 84.54%);'
    },
    gardientGrey: {
      main: 'radial-gradient(32.18% 80.24% at 100% 0%, rgba(0, 255, 179, 0.3) 0%, rgba(24, 242, 177, 0) 100%);'
    }
    
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          display: 'grid',
          justifyItems: 'center'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'transparent',
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'white',
          borderRadius: '15px',
          padding: 0
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          borderRadius: '0',
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        sizeSmall: {
          background: '#FFFFF',
          borderRadius: '30px',

          '&:hover': {
            background: 'linear-gradient(90deg, #24C1F2 0%, #1DEDD4 100%)'
          },
        },
        sizeMedium: {
          background: 'linear-gradient(90deg, #24C1F2 0%, #1DEDD4 100%)',
          borderRadius: '30px',
          height: '60px',
          fontSize: '1.5rem',
          fontWeight: 500,
          textTransform: 'none',
          paddingLeft: '20px',
          paddingRight: '20px',
          lineHeight: '26px',
          letterSpacing: '0.46px',
          textRendering: 'geometricPrecision',
          color: 'white',

          '&:hover': {
            background: 'linear-gradient(90deg, #1983A6 0%, #16A57A 100%);'
          }
        },
        sizeLarge: {
          background: '#18F2B1',
          borderRadius: '30px',

          '&hover': {
            background: 'linear-gradient(90deg, #24C1F2 0%, #1DEDD4 100%);'
          }
        }
      },
    }
  }
});

export default theme;