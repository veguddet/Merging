import {combineReducers, createStore} from 'redux';

import cartReducer from './cartReducer';

const rootReducers = combineReducers({
  cartReducer,
});

let store = createStore(rootReducers);

export default store;
