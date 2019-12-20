import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PersonalInfo.css';

class PersonalInfo extends Component {

    render() {
      const listOfUsers = this.props.users.slice(1, 10).map((user) =>
      <div>
        <div class="row">
          <div class="card">
            <h1>{user.employee_name}</h1>
            <p classname="title">Salary: {user.employee_salary}</p>
            <p>Age: {user.employee_age}</p>
          </div>
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


export default PersonalInfo