import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Users.css';
import Card from './Card';

class Users extends Component {

    render() {
      const listOfUsers = this.props.users.slice(1, 10).map((user) =>
      <div>
        <div class="row">
          <Card user={user}/>
        </div>
        <br />
      </div>
      );
          return (
            <Fragment>
              <h2>Welcome!</h2>
              <br />
              <div>{listOfUsers}</div>
            </Fragment>
            );
        }
}


export default Users