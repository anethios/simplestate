import cookie from 'react-cookies';
var uniqid = require('uniqid');

const Login = (state, action) => {
  var nextId = uniqid()
  cookie.save('userId', nextId)
  return {
    ...state, 
    user: {
      ...state.user,
      id: nextId
    }
  }
}

const Logout = (state, action) => {
  cookie.remove('userId')
  return {
      ...state,
      user: {
          ...state.user,
          id: undefined
      }
  }
}

const reducerSwitch = {
  "Login": Login,
  "Logout": Logout
}

export const authentication = (state, action) => {
  return reducerSwitch[action.operation](state, action)
}