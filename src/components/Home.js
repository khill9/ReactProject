import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonalInfo from './PersonalInfo';
import ReactLoading from "react-loading";
import './Loading.css';

class Home extends Component {

    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        user: []
      };
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/")
          .then(res => res.json())
          .then(
            (result) => {
              setTimeout(() => {
                this.setState({
                  isLoaded: true,
                  user: result.results[0]
                });
              }, 3000);
            },
           (error) => {
              this.setState({
              isLoaded: true,
              error
            });
          }
        )
      // Hide Login Portion once authenticated
      var loginForm = document.getElementById("loginForm");
      loginForm.style.display = "none";
    }

    render() {
        const { error, isLoaded, user } = this.state;
        if (error) {
          return <div class="alert alert-danger" role="alert">Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div class="loader"><ReactLoading type={"cylon"} color={"black"} /></div>;
        } else {
          return (
            <PersonalInfo  user={user}/>
          );
        }
      }
}


export default Home