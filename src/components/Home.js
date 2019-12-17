import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonalInfo from './PersonalInfo';

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
              this.setState({
                isLoaded: true,
                user: result.results[0]
              });
            },
           (error) => {
              this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    render() {
        const { error, isLoaded, user } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <PersonalInfo  user={user}/>
          );
        }
      }
}


export default Home