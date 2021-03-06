import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'; 
import axios from 'axios';

class Login extends Component{
  constructor(props){
    super(props);
    
    this.state={
      email: '',
      password: ''
     }
    
    this.inputHandler = this.inputHandler.bind(this);
    this.login = this.login.bind(this);
  }

  inputHandler(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  async login(e) {
    e.preventDefault();
    const { email, password } = this.state;
    if (email && password) {
      let data = {
        email: email,
        password: password
      }
      await axios.post('https://book-a-doc.herokuapp.com/api/v1/auth/login/', data
      )
      .then(response => {
        let userData = response.data;
        console.log(userData);
        sessionStorage.setItem('userData', JSON.stringify(userData));
        let data = sessionStorage.getItem('userData');
        console.log(JSON.parse(data));
       
        alert('login successul');
        // return <Redirect to={{pathname: '/dashboard'}}/>
        window.location = '/dashboard';
      })
      .catch(error => {
        console.log(error);
        alert(`Server error, try again later`)
      })
    } 
  }



  render () {
    return( 
      <>
        <div className="parent">
          <h1>Login</h1>
          <div className="main-container">
            <p className="login-text">Welcome back!</p>
            <p>Don't have an account yet? <span><Link to='/register'> Register</Link></span></p>
            <div className="container">
              <form id="login">
                <div className="group">
                  <label htmlFor="email">Email Address</label> 
                  <input type="email" name="email" onChange={this.inputHandler}/>
                </div>
                <div className="group">
                  <label htmlFor="password">Password</label> 
                  <input type="password" name="password" onChange={this.inputHandler}/>
                </div>
              </form> 
              <button type="login" form="login" onClick={this.login}value="login">Login</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Login;


