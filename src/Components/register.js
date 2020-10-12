import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

class Register extends Component {
  constructor(props) {
    super(props);

    this.state= {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
     }

    this.inputHandler = this.inputHandler.bind(this);
    this.register =  this.register.bind(this); 
  } 

  inputHandler(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  register() {
    const {firstName, lastName, email, password} = this.state;
    let name = `${firstName} ${lastName}`;
    (name && email && password) ? alert('Registration Successful') : alert('Please fill in the details');
  }  

  render() {
    return(
        <div className="parent">
          <h1>Register</h1>
          <div className="main-container">
            <p className="login-text">Let's get you started!</p>
            <p>Already have an account? <span><Link to='/login'>Login</Link></span></p>
            <div className="container">
              <form id="register">
                <div className="group">
                  <label htmlFor="fname">First Name:</label> 
                  <input id="fname" type="text" name="firstName" />
                </div>
                <div className="group">
                  <label htmlFor="lname">Last Name:</label> 
                  <input id="lname" type="email" />
                </div>
                <div className="group">
                  <label htmlFor="email">Email Address:</label> 
                  <input type="email" />
                </div>
                <div className="group">
                  <label htmlFor="password">Password:</label> 
                  <input type="password" />
                </div>
              </form> 
              <button type="submit" form="register" value="submit" onClick={this.register}>Register</button>
            </div>
          </div>
        </div>
    )
  }      
}


export default Register;