//IMPORTS NEEDED
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

//REDUCERS
//Feeling = (state = number, action) => return state;
const feelingResponse = (state = 0, action) => {
  if (action.type === 'SET_FEELING_RESPONSE') {
    return action.payload;
    // } else if (action.type === 'RESET_FEEDBACK') {
    //   return (state = 0);
  }
  return state;
};
//Understanding = (state = number, action) => return state;
const understandingResponse = (state = 0, action) => {
  if (action.type === 'SET_UNDERSTANDING_RESPONSE') {
    return action.payload;
    // } else if (action.type === 'RESET_FEEDBACK') {
    //   return (state = 0);
  }
  return state;
};
//Support = (state = number, action) => return state;
const supportResponse = (state = 0, action) => {
  if (action.type === 'SET_SUPPORT_RESPONSE') {
    return action.payload;
    // } else if (action.type === 'RESET_FEEDBACK') {
    //   return (state = 0);
  }
  return state;
};
//Comments = (state = string, action) => return state;
const commentsResponse = (state = [], action) => {
  if (action.type === 'SET_COMMENTS_RESPONSE') {
    return action.payload;
    // } else if (action.type === 'RESET_FEEDBACK') {
    //   return (state = '');
  }
  return state;
};

//STORE REDUCERS
export const store = () =>
  createStore(
    combineReducers({
      feelingResponse,
      understandingResponse,
      supportResponse,
      commentsResponse,
    }),
    //MALWARE
    applyMiddleware(logger)
  );
