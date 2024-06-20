import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    h6: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '24px',
      textAlign: 'left',
    },
    subtitle2: {
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: '16px',
      color: 'red', 
    },
    subtitle1: {
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: '16px',
      color: 'rgba(101, 110, 102, 1)',

    },
    body1: {
        fontSize: '12px',
        fontWeight: 500,
        lineHeight: '16px',
        textAlign: 'left',
        color: 'rgba(55, 60, 56, 1)',
    },
    body2: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '16px',
    },
  },
});

export default theme;

