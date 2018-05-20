import config from './config';

function createAction(type, payload) {
  return { type, payload };
}

export function setAccessToken(at) {
  return createAction('UPDATE_ACCESS_TOKEN', at);
};

export function selectFlashAir(id) {
  return dispatch => {
    dispatch(createAction('SELECT_FLASHAIR', id));
    //dispatch(getLastAccess(id));
    dispatch(getFiles(id));
  };
};

export function updateUserInfo() {
  return (dispatch, getState) => {
    return fetch(`${config.apiBase}/v1/users/self`, {
      headers: {
        Authorization: `Bearer ${getState().accessToken}`,
      },
    }).then(response => {
      if (response.status === 401) {
        dispatch(createAction('UPDATE_ACCESS_TOKEN', ''));
        return;
      }
      if (response.status !== 200) {
        console.log('error', response.status)
        return;
      }
      response.json().then(user => {
        dispatch(createAction('UPDATE_USER', user));
      });
    });
  };
};

export function updateFlashAirList() {
  return (dispatch, getState) => {
    return fetch(`${config.apiBase}/v1/flashairs`, {
      headers: {
        Authorization: `Bearer ${getState().accessToken}`,
      },
    }).then(response => {
      if (response.status === 401) {
        dispatch(createAction('UPDATE_ACCESS_TOKEN', ''));
        return;
      }
      if (response.status !== 200) {
        console.log('error', response.status)
        return;
      }
      response.json().then(body => {
        dispatch(createAction('UPDATE_FLASHAIRS', body.flashairs));
      });
    });
  };
};

export function getLastAccess(id) {
  return (dispatch, getState) => {
    return fetch(`${config.apiBase}/v1/flashairs/${id}/last_access`, {
      headers: { Authorization: `Bearer ${getState().accessToken}` },
    }).then(response => {
      if (response.status === 401) {
        dispatch(createAction('UPDATE_ACCESS_TOKEN', ''));
        return;
      }
      if (response.status !== 200) {
        console.log('error', response.status)
        return;
      }
      response.json().then(body => {
        dispatch(createAction('UPDATE_LAST_ACCESS', {id, lastAccess: body.last_access}));
      });
    });
  };
};

export function getFiles(id) {
  return (dispatch, getState) => {
    return fetch(`${config.apiBase}/v1/flashairs/${id}/files`, {
      headers: { Authorization: `Bearer ${getState().accessToken}` },
    }).then(response => {
      if (response.status === 401) {
        dispatch(createAction('UPDATE_ACCESS_TOKEN', ''));
        return;
      }
      if (response.status !== 200) {
        console.log('error', response.status)
        return;
      }
      response.json().then(body => {
        dispatch(createAction('UPDATE_FILES', {id, files: body.files}));
      });
    });
  };
};
