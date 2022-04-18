// src/components/Home.js
// The Home component is used to demonstrate the use of Link.

import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import bankImage from './image/bank.jpg';

class Home extends Component {
  render() {
    return (
      <div class="content">
        <div class="navbar">
          <Link to="/">Home</Link>
          <Link to="/userProfile">User Profile</Link>
          <Link to="/login">Login</Link>
          <Link to="credits">Credits</Link>
          <Link to="debits">Debits</Link>
        </div>
        <img src={bankImage} alt="bank"/>
        <h1>Bank of React</h1>
        <div class="balance">
          <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
      </div>
    );
  }
}

export default Home;