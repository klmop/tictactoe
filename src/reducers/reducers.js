import { combineReducers } from 'redux'
import historyReducer from './reducer_history';

const rootReducer =  combineReducers({
    history: historyReducer,
})

export default rootReducer