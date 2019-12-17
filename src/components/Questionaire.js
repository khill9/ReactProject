import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

class Questionaire extends Component {

    constructor(props) {
      super(props);
      this.state = {
        questions: []
      };
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.items
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
           (error) => {
              this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <ul>
              
            </ul>
          );
        }
      }
}


export default Questionaire