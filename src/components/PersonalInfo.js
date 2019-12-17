import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PersonalInfo.css';

class PersonalInfo extends Component {

    render() {
      const isFemale = this.props.user.gender === "female";
          return (
            <div id="well">
              <div class="row">
                {isFemale ? (<div class="col-md-10"><img src="https://randomuser.me/api/portraits/thumb/women/2.jpg" alt="userImage"/></div>)
                :
                (<div class="col-md-10"><img src="https://randomuser.me/api/portraits/thumb/men/33.jpg" alt="userImage"/></div>)}
              </div>
              <div class="row">
                <div class="col-sm-8">{this.props.user.name.first} {this.props.user.name.last}</div>
              </div>
              <br />
              <div class="row">
                <div class="col-md-5 label">Phone Number</div>
                <div class="col-md-10">{this.props.user.cell}</div>
              </div>
              <div class="row">
                <div class="col-md-5 label">Date of Birth</div>
                <div class="col-md-10">{this.props.user.dob.date}</div>
              </div>
        	    
            </div>
            )
        }
}


export default PersonalInfo