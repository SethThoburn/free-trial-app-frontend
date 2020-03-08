import {LOGIN_SUCCESS, LOGIN_FAIL} from './types';

  
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
    }
    case LOGIN_FAIL:
      return {
        ...state,
        user: null,
      }
    default:
      return state;
  }
}