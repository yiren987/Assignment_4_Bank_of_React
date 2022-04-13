// src/components/Login.js
// The LogIn component is used to demonstrate the use of Redirect.

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {Link} from 'react-router-dom';

class LogIn extends Component {
  constructor () {  // Create and initialize state
    super()
    this.state = {
      user: {
        userName: '',
        password: ''
      },
      redirect: false
    }
  }

  // When the user name input is changed, capture the input and update the state (user.userName)
  handleChange = (e) => {
    const updatedUser = {...this.state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({user: updatedUser})
  }

  // When user clicked "Log In" button, store user data and then redirect to "User Profile" page
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.mockLogIn(this.state.user)
    this.setState({redirect: true})
  }
  
  render () {
    if (this.state.redirect) {  // Redirect to "User Profile" page when "Log In" button is clicked
      return (<Redirect to="/userProfile"/>)
    }
    // Render the login form
    return (
      <div class="content">
        <div class="navbar">
          <Link to="/">Home</Link>
          <Link to="/userProfile">User Profile</Link>
          <Link to="/login">Login</Link>
          <Link to="credits">Credits</Link>
          <Link to="debits">Debits</Link>
        </div>
        <h1>Login</h1>
        <div class="box">
          <form class="login_form" onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="userName">User Name</label><br></br>
              <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName} />
            </div>
            <div>
              <label htmlFor="password">Password</label><br></br>
              <input type="password" name="password" />
            </div>
            <button>Log In</button>
          </form>        
          </div>          
      </div>
    )
  }
}

export default LogIn