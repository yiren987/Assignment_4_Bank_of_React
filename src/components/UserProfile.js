// src/components/UserProfile.js
// The UserProfile component is used to demonstrate the use of Route and Link.

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class UserProfile extends Component {
  render() {
    return (
        <div>
          <div class="navbar">
            <a><Link to="/">Home</Link></a>
            <a><Link to="/userProfile">User Profile</Link></a> 
            <a><Link to="/login">Login</Link></a>
            <a><Link to="credits">Credits</Link></a>
            <a><Link to="debits">Debits</Link></a>
          </div>
          <h1>User Profile</h1>

          <div>Username: {this.props.userName}</div>
          <div>Member Since: {this.props.memberSince}</div>
          
          <Link to="/">Return to Home</Link>
        </div>
    );
  }
}

export default UserProfile;