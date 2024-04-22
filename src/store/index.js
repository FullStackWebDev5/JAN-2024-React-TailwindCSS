import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension';
import newsReducer from '../reducers/news.js'
import { thunk } from 'redux-thunk'

const reducer = combineReducers({
  newsReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store