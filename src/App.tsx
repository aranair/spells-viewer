import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from "@emotion/styled";
import MySpells from './pages/MySpells';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { mainTheme } from './theme';

import { StoreProvider } from './store/StoreContext';
import store from './store/RootStore';

import './App.css';

const HeaderContainer = styled.div`
  display: 'block';
  width: 800px;
  text-align: center;
  margin: 100px auto 0 auto;
`;

const App = observer((): JSX.Element => {
  return (
    <StoreProvider value={store}>
      <ThemeProvider theme={mainTheme}>
        <div className="App">
          <HeaderContainer>
            <Typography variant="h5" component="h2">
              Spells (for Wizards and other Adventurers)
            </Typography>
          </HeaderContainer>
          <MySpells />
        </div>
      </ThemeProvider>
    </StoreProvider>
  );
});

export default App;
