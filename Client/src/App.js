import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Splash from './components/home/Splash'

import Navibar from './components/layout/Navibar'
import { AuthContext } from './components/auth/AuthContext'


import {
  BrowserRouter as Router,
} from 'react-router-dom';




class App extends Component {
  constructor() {
    super();
    this.setToken = (token) => {
      localStorage.setItem('token', token)
      this.setState({ sessionToken: token })
    }
    this.state = {
      sessionToken: '',
      setToken: this.setToken
    }
  }

 



  render() {
    return (
      
      <div className="main">
            <div className="mainDiv">
          <AuthContext.Provider value={this.state}>
              <Navibar />
        <Router>
              <Splash />
            
            
        </ Router>
          </AuthContext.Provider>
      </div>
            </div>
    );
  }
}

export default props => (
  <AuthContext.Consumer>
    {auth => <App {...props} auth={auth} />}
  </AuthContext.Consumer>
)