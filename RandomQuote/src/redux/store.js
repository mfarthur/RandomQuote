
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; // Use a importação nomeada
import quoteReducer from './quoteReducer';

const rootReducer = combineReducers({
  quote: quoteReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk)); // Aqui está o uso correto

export default store;
