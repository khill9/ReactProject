import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonalInfo from './PersonalInfo';
import ReactLoading from "react-loading";
import './Loading.css';
import { fetchProducts } from '../redux/reducer';
import {getProductsError, getProducts, getProductsPending} from '../redux/reducer';


class Home extends Component {

    constructor(props) {
      super(props);
      this.state = {
        error: null,
        pending: false,
        products: []
      };
      this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentWillMount() {
      const {fetchProducts} = this.props;
      fetchProducts();

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
        } else if(this.props.products == undefined){
          return <div class="loader"><ReactLoading type={"cylon"} color={"black"} /></div>
        } else {
          return (
            <PersonalInfo  user={this.props.products}/>
          );
        }
      }
  } 

const mapStateToProps = (state) => ({
  error: getProductsError(state),
  products: getProducts(state),
  pending: getProductsPending(state)
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: (test) => dispatch(fetchProducts("test"))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home );