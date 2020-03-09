import {combineReducers} from 'redux'
import AuthReducer from 'app/auth/AuthReducer'

export default combineReducers({
  auth: AuthReducer,
})