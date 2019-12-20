const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

export function login(email, password) {
  return dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));

    callLoginApi(email, password, error => {
      dispatch(setLoginPending(false));
      if (!error) {
        dispatch(setLoginSuccess(true));
        
      } else {
        dispatch(setLoginError(error));
      }
    });
  }
}

export function fetchUsers(test) {
  return dispatch => {
      dispatch(fetchUsersPending());
      //fetch("https://randomuser.me/api/")
      fetch("http://dummy.restapiexample.com/api/v1/employees")
      //fetch("https://www.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25&key=AIzaSyA1UFZDOdv9oPrdQpk7VJutPL7vHuEtbZU")
          .then(result => result.json())
          .then(
            (result) => {
              //dispatch(fetchUsersSuccess(result[5]));
              //return result[5];
              dispatch(fetchUsersSuccess(result));
              return result;
            },
           (error) => {
            dispatch(fetchUsersError(error));
            return error;
          }
        )
    }
  }

function callLoginApi(email, password, callback) {
  setTimeout(() => {
    if (email === 'admin@example.com' && password === 'admin') {
      return callback(null);
    } 
    if (email === 'kaylie.hill@regions.com' && password === 'password') {
      return callback(null);
    } 
    if (email === 'khill@cgi.com' && password === 'pw') {
      return callback(null);
    } else {
      return callback(new Error('Invalid email and password'));
    }
  }, 1000);
}

function setLoginPending(isLoginPending) {
  return {
    type: SET_LOGIN_PENDING,
    isLoginPending
  };
}

function setLoginSuccess(isLoginSuccess) {
  return {
    type: SET_LOGIN_SUCCESS,
    isLoginSuccess
  };
}

function setLoginError(loginError) {
  return {
    type: SET_LOGIN_ERROR,
    loginError
  }
}

function fetchUsersPending(pending) {
  return {
      type: FETCH_USERS_PENDING,
      pending
  }
}

function fetchUsersSuccess(users) {
  return {
      type: FETCH_USERS_SUCCESS,
      users
  }
}

function fetchUsersError(error) {
  return {
      type: FETCH_USERS_ERROR,
      error
  }
}

export default function reducer(state = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null,
  pending: false,
  users: null,
  error: null
}, action) {
  switch (action.type) {
    case SET_LOGIN_PENDING:
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending
      });

    case SET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess
      });

    case SET_LOGIN_ERROR:
      return Object.assign({}, state, {
        loginError: action.loginError
      });

    case FETCH_USERS_PENDING:
      return Object.assign({}, state, {
        pending: action.pending
      });

    case FETCH_USERS_SUCCESS:
      return Object.assign({}, state, {
        users: action.users
      });

    case FETCH_USERS_ERROR:
      return Object.assign({}, state, {
        error: action.error
      });

    default:
      return state;
  }
}


export const getUsers = state => state.users;
export const getUsersPending = state => state.pending;
export const getUsersError = state => state.error;