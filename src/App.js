// src/App.js

import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';
import axios from 'axios';

class App extends Component {
  constructor() {  // Create and initialize state
    super(); 
    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '07/23/96',
      },
      credits:[],
      debits: []
    }
  }

  //API requests
 componentDidMount = async () => {
    let creditAPI = 'https://moj-api.herokuapp.com/credits'  //Link to API for credit info
    let debitAPI = 'https://moj-api.herokuapp.com/debits'  //Link to API for debit info

    let creditResponse = await axios.get(creditAPI);
    let debitResponse = await axios.get(debitAPI);

    this.setState({credits: creditResponse.data});
    this.setState({debits: debitResponse.data});
  }

  // Update state's currentUser (userName and memberSince) after "Log In" button is clicked
  mockLogIn = (logInInfo) => {  
    const newUser = {...this.state.currentUser}
    var today = new Date()
    newUser.userName = logInInfo.userName
    newUser.memberSince = (today.getMonth()+1) + '/' + today.getDate() + '/' + today.getFullYear() 
    this.setState({currentUser: newUser})

  }

  addCredit = (e) =>{
    e.preventDefault()  //stops page refresh on form submission
    var today = new Date()
    var currentDay = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate()
    this.setState(prevState => ({
      accountBalance: (parseFloat(this.state.accountBalance) + parseFloat(e.target.amount.value)).toFixed(2),
      credits: [...prevState.credits, {id: this.state.credits.length+1, amount: e.target.amount.value, description: e.target.description.value, date: currentDay}] //update state with a new item
    }))
  }

  addDebit = (e) => {
    e.preventDefault()  //stops page refresh on form submission
    var today = new Date()
    var currentDay = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate()
    this.setState(prevState => ({
      accountBalance: (this.state.accountBalance - e.target.amount.value).toFixed(2),
      debits: [...prevState.debits, {id: this.state.debits.length+1, amount: e.target.amount.value, description: e.target.description.value, date: currentDay}] //update state with a new item
    }))
  }

  // Create Routes and React elements to be rendered using React components
  render() {  
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />);  // Pass props to "LogIn" component
    const CreditsComponent = () => (<Credits accountBalance={this.state.accountBalance} credits={this.state.credits} addCredit={this.addCredit}/>);
    const DebitsComponent = () => (<Debits accountBalance={this.state.accountBalance} debits={this.state.debits} addDebit={this.addDebit}/>); // Pass props to "Debits" component

    return (
        //Added root path to the basename of the router to fix github pages deploying to a blank page
        <Router basename={process.env.PUBLIC_URL}>  
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/credits" render={CreditsComponent}/>
            <Route exact path ="/debits" render={DebitsComponent}/>
          </div>
        </Router>
    );
  }
}

export default App;