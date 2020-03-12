import {LOGIN_FAIL, LOGIN_SUCCESS, LOGGING_IN} from 'app/auth/types'
import axios from 'axios'

export const login = ({email, password}) => dispatch => {
  const config = {headers: {"content-type": "application/json",}} 
  const body = JSON.stringify({email, password})

  axios.post('http://free-trial-app-backend.herokuapp.com/api/v1/rest-auth/login/', body, config)
    .then(res => {console.log(res)
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      })
    }).catch(err => {
      dispatch({type: LOGIN_FAIL, payload: err})
    })

}

export const startLoadingUser = () => dispatch => {
  return dispatch({type: LOGGING_IN})
}