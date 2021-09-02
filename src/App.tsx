import React from 'react';
import './App.css';

import SpellList from './pages/SpellList';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
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
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <SpellList />
      </div>
    </ThemeProvider>
  );
}

export default App;
