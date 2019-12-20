import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PersonalInfo.css';
import Card from './Card';

class PersonalInfo extends Component {

    render() {
      //const isFemale = this.props.user.gender === "female";
          return (
            /*<Fragment>
              <div class="row">
                <div class="col-md-5">
                  <div class="card">
                    {isFemale ? (<div><img src="https://randomuser.me/api/portraits/thumb/women/2.jpg" alt="userImage"/></div>)
                      :
                      (<div><img src="https://randomuser.me/api/portraits/thumb/men/33.jpg" alt="userImage"/></div>)}
                      <h1>{this.props.user.name.first} {this.props.user.name.last}</h1>
                      <p class="title">CEO & Founder, Example</p>
                      <p>Phone Number: {this.props.user.cell}</p>
                  </div>
                </div>
              </div>
              <Card />
            </Fragment>*/
            <div class="row">
                <div class="col-md-5">
                  <div class="card">
                      <h1>{this.props.user.employee_name}</h1>
                      <p class="title">CEO & Founder, Example</p>
                      <p>Phone Number: {this.props.user.employee_salary}</p>
                  </div>
                </div>
              </div>
            );
        }
}


export default PersonalInfo