import {combineReducers} from 'redux'
import TodoReducer from './TodoReducer'
import SaveReducer from './SaveReducer'

export default combineReducers({TodoReducer,SaveReducer});