// src/components/Home.js
// The Home component is used to demonstrate the use of Link.

import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div>
          <div class="navbar">
            <a href='/userProfile'>User Profile</a> 
            <a href='/login'>Login</a>
            <a href=''>Credits (to be implemented in the Assignment)</a>
            <a href='/debits'>Debits</a>
          </div>
          <img src="https://picsum.photos/200/200" alt="bank"/>
          <h1>Bank of React</h1>
          <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    );
  }
}

export default Home;