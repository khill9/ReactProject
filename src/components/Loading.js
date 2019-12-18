import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";
import Root from './Root';
import './Loading.css';
import * as doneData from "../doneloading.json";

const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: doneData.default,
    rendererSettings: {
       preserveAspectRatio: "xMidYMid slice"
    }
 };

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
        <div class="loader">
            {this.state.loading ? (
            <ReactLoading type={"bars"} color={"black"} />
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