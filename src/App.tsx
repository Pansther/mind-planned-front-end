import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { rootReducer } from './store';
import AppRouter from './routes';

const store = createStore(rootReducer);

const App: React.FC = () => { 
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider> 
  );
}

export default App;
