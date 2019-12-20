import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/reducer';
import './Root.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import ReactLoading from "react-loading";
import './Loading.css';

class Root extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    let {email, password} = this.state;
    let {isLoginPending, isLoginSuccess, loginError} = this.props;
    return (
        <form name="loginForm" onSubmit={this.onSubmit}>
        <div id="loginForm">
          <div class="wrap-input100">
            <input class="input100" type="email" name="email" placeholder="Enter your email." onChange={e => this.setState({ email: e.target.value })} value={email} />
            <span class="focus-input100"></span>
          </div>
          <div class="wrap-input100">
            <input class="input100" type="password" name="password" placeholder="Enter your password." onChange={e => this.setState({password: e.target.value})} value={password}/>
            <span class="focus-input100"></span>
          </div>

          <br />
          <input type="submit" class="submitBtn" value="Login" />
          
          <div className="message">
            { isLoginPending && <div class="loader"><ReactLoading type={"cylon"} color={"black"} /></div>}
            { isLoginSuccess && <div class="alert alert-success" role="alert">Success.</div> }
            { loginError && <div class="alert alert-danger" role="alert">{loginError.message}</div> }
          </div>
        </div>
        <div>
        { isLoginSuccess && <Home /> }
        </div>
      </form>
    )
  }

  onSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.login(email, password);
    this.setState({
      email: '',
      password: ''
    });
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);