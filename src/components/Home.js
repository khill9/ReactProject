import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Users';
import ReactLoading from "react-loading";
import './Loading.css';
import { fetchUsers } from '../redux/reducer';
import {getUsersError, getUsers, getUsersPending} from '../redux/reducer';
import Card from './Card';


class Home extends Component {

    constructor(props) {
      super(props);
      this.state = {
        error: null,
        pending: false,
        users: []
      };
      this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentWillMount() {
      const {fetchUsers} = this.props;
      fetchUsers();

      // Hide Login Portion once authenticated
      var loginForm = document.getElementById("loginForm");
      loginForm.style.display = "none";
    }

  shouldComponentRender() {
      const {pending} = this.props;
      if(this.pending === false) return false;
      // more tests
      return true;
  }

    render() {
        const { error, user } = this.state;
        if (error) {
          return <div class="alert alert-danger" role="alert">Error: {error.message}</div>;
        } else if(this.props.users == undefined){
          return <div class="loader"><ReactLoading type={"cylon"} color={"black"} /></div>
        } else {
          return (
            <Users  users={this.props.users}/>
          );
        }
      }
  } 

const mapStateToProps = (state) => ({
  error: getUsersError(state),
  users: getUsers(state),
  pending: getUsersPending(state)
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: (test) => dispatch(fetchUsers("test"))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home );