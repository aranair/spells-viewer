import React from 'react';
import { observer } from 'mobx-react-lite';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import { mainTheme } from './theme';
import { StoreProvider } from './store/StoreContext';
import store from './store/RootStore';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './components/Routes';

import './App.css';

const App = observer((): JSX.Element => {
  return (
    <StoreProvider value={store}>
      <ThemeProvider theme={mainTheme}>
        <div className="App">
          <Router>
            <Routes />
            <Footer />
          </Router>
        </div>
      </ThemeProvider>
    </StoreProvider>
  );
});

export default App;
