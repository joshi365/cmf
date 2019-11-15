
// Store Js File
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
const middleware = [thunk];

const intialState = {};

let composeEnhancers = compose(applyMiddleware(...middleware));

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  composeEnhancers = compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

const store = createStore(rootReducer, intialState, composeEnhancers);

export default store;