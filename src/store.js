import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const middleware = [thunk];
const initialState = {};

const configureStore = (state = initialState) => {
  return createStore(
    rootReducer,
    state,
    compose(applyMiddleware(...middleware))
  );
};

export default configureStore;
