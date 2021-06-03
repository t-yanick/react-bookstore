import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';

const initialState = {
  books: [
    {
      id: 1,
      title: 'Mr Bean',
      category: 'Horror',
    },
    {
      id: 2,
      title: 'Dead Alive',
      category: 'Action',
    },
  ],
};

const store = createStore(rootReducer, initialState);
store.getState();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
