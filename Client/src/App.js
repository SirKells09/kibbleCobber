import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Col, Row } from 'reactstrap'
import Splash from './components/home/Splash'
import { AuthContext } from './components/auth/AuthContext'
import Auth from './components/auth/Auth'
import {
  BrowserRouter as Router,
  Route,
  Switch,
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


  protectedViews=()=> {
    if (this.state.sessionToken=== localStorage.getItem('token')) {
      return (<Switch>
        <Route>
          <Splash sessionToken={this.state.sessionToken} />
        </Route>
      </Switch>
      )
      }else {
        return (
          <Route path="/auth">
        <Auth setToken={this.state.sessionToken} />
          </Route>
        )
      }
        
  }

  render() {
    return (
      <div className='App'>
          <div className="main">
          <div className='mainDiv'>
        <Container>
        <AuthContext.Provider value={this.state}>
      <Router>
        {this.protectedViews()}
      </ Router>
        </AuthContext.Provider>
      </Container>
           </div>
           </div>
      </div>
    );
  }
}

export default App;