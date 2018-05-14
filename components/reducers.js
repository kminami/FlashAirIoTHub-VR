import { combineReducers } from 'redux';

function accessToken(state = '', action) {
  switch(action.type) {
  case 'UPDATE_ACCESS_TOKEN':
    return action.payload;
  default:
    return state
  }
}

const DEFAULT_USER = { email: '' };
function user(state = DEFAULT_USER, action) {
  switch(action.type) {
  case 'UPDATE_USER':
    return action.payload;
  default:
    return state
  }
}

function flashairs(state = [], action) {
  switch(action.type) {
  case 'UPDATE_FLASHAIRS':
    return action.payload;
  default:
    return state
  }
}

function selectedFlashAir(state = '', action) {
  switch(action.type) {
  case 'SELECT_FLASHAIR':
    return action.payload;
  default:
    return state
  }
}

export default combineReducers({
  accessToken, user, flashairs, selectedFlashAir,
})
