import React from 'react';
import Routes from './app/js/screens/Routes';

import {Provider} from 'react-redux';
import store from './app/js/config/store';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
