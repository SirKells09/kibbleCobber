import React from 'react';
import {Container} from 'reactstrap'
import Login from './Login'
import Signup from './Signup'
import {AuthContext} from './AuthContext'


class Auth extends React.Component  {
     constructor(props) {
      super(props)
      this.state = {
        isUser: false,
       

      }
  }
changeUserStatus = () => this.setState({ isUser: !this.state.isUser})
    
authViewShow = () => {
      if (this.state.isUser) {
        return(
          <Login toggleForm= { this.changeUserStatus }/>
        )
      }else{
        return(
          <Signup  toggleForm={ this.changeUserStatus }/>
        )
      }
    }
    render(){
        return(
          <div>

    <Container className="authCon">
  
          {this.authViewShow()}

  
      
          </Container>
          </div>
         

    )
}
}

export default props => (
  <AuthContext.Consumer>
      {auth=> <Auth {...props} auth={auth} />}
  </AuthContext.Consumer>
)