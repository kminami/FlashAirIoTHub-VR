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
    return state;
  }
}

function lastAccesses(state = {}, action) {
  switch(action.type) {
  case 'UPDATE_LAST_ACCESS':
    state[action.payload.id] = action.payload.lastAccess;
    return state;
  default:
    return state;
  }
}

function files(state = {}, action) {
  switch(action.type) {
  case 'UPDATE_FILES':
    let newState = {};
    newState[action.payload.id] = action.payload.files;
    return {...state, ...newState};
  default:
    return state;
  }
}

export default combineReducers({
  accessToken, user, flashairs, selectedFlashAir,
  lastAccesses, files,
})
