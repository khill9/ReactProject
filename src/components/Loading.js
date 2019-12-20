import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";
import Root from './Root';
import './Loading.css';

class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: true
        };
      }

      componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false })
          }, 5000);
      }

    render(){
       return(
        <div className="loadDiv">
            {this.state.loading ? (
            <div className="loader"><ReactLoading type={"cylon"} color={"black"} /></div>
            ) : (
            <FadeIn>
                <Root />
            </FadeIn>
            )}
        </div>
       )
    }
 }

 export default Loading