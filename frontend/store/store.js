import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';

//TODO: Remember to remove redux-logger
import createLogger from 'redux-logger';

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunk, createLogger())
  )
);

export default configureStore;
