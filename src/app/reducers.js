import {combineReducers} from 'redux'
import AuthReducer from 'app/auth/reducer'
import DashReducer from 'app/dashboard/reducer'

export default combineReducers({
  auth: AuthReducer,
  dashboard: DashReducer,
})