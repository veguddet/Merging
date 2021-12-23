
import { combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'

// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import AsyncStorage from '@react-native-community/async-storage';

 import cartReducer from './cartReducer';

 
const rootReducers = combineReducers({
  cartReducer,
});
const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducers)
 
export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}
