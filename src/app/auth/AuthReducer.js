import {LOGIN_SUCCESS, LOGIN_FAIL, LOGGING_IN} from './types';

  
const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: false,
  user: null,
  isAdmin: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
    return {
      ...state,
      user: action.payload,
      isAuthenticated: true,
      isLoading: false,
    }
    case LOGIN_FAIL:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      }
    case LOGGING_IN:
      return {
        ...state,
        isLoading: true,
      }
    default:
      return state;
  }
}