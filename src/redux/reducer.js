const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

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

export function fetchProducts(test) {
  return dispatch => {
      dispatch(fetchProductsPending());
      fetch("https://randomuser.me/api/")
          .then(result => result.json())
          .then(
            (result) => {
              dispatch(fetchProductsSuccess(result.results[0]));
              return result.results[0];
            },
           (error) => {
              this.setState({
                pending: false,
              error
            });
            dispatch(fetchProductsError(error));
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

function fetchProductsPending(pending) {
  return {
      type: FETCH_PRODUCTS_PENDING,
      pending
  }
}

function fetchProductsSuccess(products) {
  return {
      type: FETCH_PRODUCTS_SUCCESS,
      products
  }
}

function fetchProductsError(error) {
  return {
      type: FETCH_PRODUCTS_ERROR,
      error
  }
}

export default function reducer(state = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null,
  pending: false,
  products: null,
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

    case FETCH_PRODUCTS_PENDING:
      return Object.assign({}, state, {
        pending: action.pending
      });

    case FETCH_PRODUCTS_SUCCESS:
      return Object.assign({}, state, {
        products: action.products
      });

    case FETCH_PRODUCTS_ERROR:
      return Object.assign({}, state, {
        error: action.error
      });

    default:
      return state;
  }
}


export const getProducts = state => state.products;
export const getProductsPending = state => state.pending;
export const getProductsError = state => state.error;