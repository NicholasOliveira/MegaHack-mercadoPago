import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import LoadData from './components/LoadData';

import Routes from './routes';
import history from './services/history';
import store from './store';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <LoadData />
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
