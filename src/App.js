import React, { Component } from 'react';
import './App.css';
import LandingPage from './pages/landingPage';
import { Route } from 'react-router-dom';
import RegisterPage from './pages/registerPage';
import NavbarComponent from './components/navbar';
import LoginPage from './pages/loginPage';
import axios from 'axios';
import { API } from './helper';
import { loginAction } from './actions'
import { connect } from 'react-redux'

class App extends Component {
  //Storage Data
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount(){
    this.keepLogin()
  }

  //Function
  keepLogin = () => {
    let tkn = localStorage.getItem("tkn_name")
    if (tkn){
    axios.get(API+`users?username=${tkn}`)
      .then(x =>{
          //mengecek data response
          console.log(x.data)
          //condition respon
          if(x.data.length > 0){
            localStorage.setItem("tkn_name", x.data[0].uname)
            this.props.loginAction(x.data[0])
          }
      }).catch(err=>{
          console.log(err)
      })
    }
  }

  render() {
    //Script HTML 
    return ( 
      <div>
        <NavbarComponent />
        <Route path="/" component={LandingPage} exact />
        <Route path="/signup" component={RegisterPage} />
        <Route path="/signin" component={LoginPage} />
      </div>
    );
  }
}
 
export default connect(null, {loginAction}) (App);