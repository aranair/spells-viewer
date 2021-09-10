import { createMuiTheme } from '@material-ui/core/styles';

export const mainTheme = createMuiTheme({
  typography: {
    "fontFamily": 'Alagard',
    "fontSize": 16,
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#1a237e',
    },
    secondary: {
      main: '#880e4f',
    },
    spellbook: {
      purple: '#7E5269',
      brown: '#E9D1A1',
      darkbrown: '#5B382B',
    },
  },
});

