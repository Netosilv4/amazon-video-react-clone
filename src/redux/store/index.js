import { combineReducers, createStore } from 'redux';
import movieReducer from '../reducers';

const rootReducer = combineReducers({ movieReducer });

const store = createStore(rootReducer);

export default store;
