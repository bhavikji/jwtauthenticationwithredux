import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

// in this file we are initializing the redux store by passing initial state and instance of reducer, we are applying thunk middleware to support async data flow.
export const initStore = (initialState = {}) => {
  return createStore(reducer, initialState, applyMiddleware(thunk));
};