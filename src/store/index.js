import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import reducerData from './reducer/reduxers';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const reducer = combineReducers({
    reducerData
})

const persistConfig = {
    key:'root',
    storage

}
const persistedReducer = persistReducer(persistConfig,reducer)
const store = createStore(
    persistedReducer,
    {}
    , applyMiddleware(thunk, logger)
)

export default store;