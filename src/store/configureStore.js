import {createStore, compose, applyMiddleware} from 'redux';
// Import thunk middleware
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';

export default function configureStore(initialState) {
  const logger = createLogger();
  return createStore(
    rootReducer,
    applyMiddleware(thunk, promise, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
