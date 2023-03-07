import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = createStore(reducers, applyMiddleware(thunk));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
