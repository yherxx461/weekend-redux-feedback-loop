import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
//IMPORTS NEEDED
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

//REDUCERS
//Feeling = (state = number, action) => return state;
const feelingResponse = (state = 0, action) => {
  if (action.type === 'SET_FEELING_RESPONSE') {
    return action.payload;
  }
  return state;
};
//Understanding = (state = number, action) => return state;
const understandingResponse = (state = 0, action) => {
  if (action.type === 'SET_UNDERSTANDING_RESPONSE') {
    return action.payload;
  }
  return state;
};
//Support = (state = number, action) => return state;
const supportResponse = (state = 0, action) => {
  if (action.type === 'SET_SUPPORT_RESPONSE') {
    return action.payload;
  }
  return state;
};
//Comments = (state = string, action) => return state;
const commentsResponse = (state = '', action) => {
  if (action.type === 'SET_COMMENTS_RESPONSE') {
    return action.payload;
  }
  return state;
};

//STORE
const store = createStore(
  combineReducers({
    feelingResponse,
    understandingResponse,
    supportResponse,
    commentsResponse,
  }),
  //MALWARE
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
