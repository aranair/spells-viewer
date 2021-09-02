import React from 'react';
import styled from "@emotion/styled";
import SpellList from './pages/SpellList';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import './App.css';

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

const HeaderContainer = styled.div`
  display: 'block';
  width: 800px;
  text-align: center;
  margin: 10px auto 0 auto;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <HeaderContainer>
          <Typography variant="h5" component="h2">
            Spells (for Wizards and other Adventurers)
          </Typography>
        </HeaderContainer>
        <SpellList />
      </div>
    </ThemeProvider>
  );
}

export default App;
