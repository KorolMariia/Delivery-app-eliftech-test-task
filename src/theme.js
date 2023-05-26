import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h5: {
          fontSize: '0.8rem',
          fontWeight: 'bold'
        },
        subtitle1: {
          textAlign: 'center',
          borderBottom: '2px solid #ce0030',
          paddingBottom: '10px',
          marginBottom: '10px'
        },
        subtitle2: {
          fontSize: '1rem',
          fontWight: 'bold',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: '1.2rem',
          color: '#ce0030',
        },
      },
    }
  },
});

const containerStyles = ({
  padding: '20px 30px',
  [theme.breakpoints.up('sm')]: {
    padding: '20px 30px',
  },
  [theme.breakpoints.up('md')]: {
    padding: '20px 60px',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '20px 90px',
  },
});

theme.components.MuiContainer = {
  styleOverrides: {
    root: containerStyles,
  },
};

export default theme;