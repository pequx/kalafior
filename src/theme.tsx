import '@fontsource/poppins/100.css'
import '@fontsource/poppins/200.css'
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
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
      fontSize: '48px',
      lineHeight: '116.7%',
      letterSpacing: '0.25px',
      fontStyle: 'normal',
      textRendering: 'geometricPrecision',
      marginBottom: '16px'
    },
    h2: {
      fontWeight: 200,
      fontSize: '34px',
      lineHeight: '123.5%',
      letterSpacing: '0.25px',
      fontStyle: 'normal',
      textRendering: 'geometricPrecision'
    },
    h3: {
      fontWeight: 400,
      fontSize: '34px',
      lineHeight: '123.5%',
      letterSpacing: '0.25px',
      fontStyle: 'normal',
      textRendering: 'geometricPrecision'
    },
    h4: {
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: '160%',
      letterSpacing: '0.15px',
      fontStyle: 'normal',
      textRendering: 'geometricPrecision'
    },
    subtitle1: {
      fontWeight: 200,
      fontSize: '16px',
      lineHeight: '175%',
      letterSpacing: '0.15px',
      fontStyle: 'normal',
      textRendering: 'geometricPrecision'
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '157%%',
      letterSpacing: '0.1px',
      fontStyle: 'normal',
      textRendering: 'geometricPrecision'
    },
    body1: {
      fontWeight: 200,
      fontSize: '20px',
      lineHeight: '150%',
      letterSpacing: '0.15px',
      fontStyle: 'normal',
      textRendering: 'geometricPrecision'
    },
    body2: {
      fontWeight: 300,
      fontSize: '12px',
      lineHeight: '150%',
      letterSpacing: '0.15px',
      fontStyle: 'normal',
      textRendering: 'geometricPrecision'
    },
  },
  palette: {
    primary: {
      main: '#24C1F2',
    },
    secondary: {
      main: '#1DEDD4',
    }
  },
  components: {
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
          fontSize: '24px',
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