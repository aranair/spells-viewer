import { createTheme } from '@material-ui/core/styles';

export const mainTheme = createTheme({
  typography: {
    "fontFamily": 'Alagard',
    "fontSize": 16,
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#7E5269',
    },
    secondary: {
      main: '#E9D1A1',
    },
  },
});

