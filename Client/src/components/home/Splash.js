import React, { Component } from 'react';
import { Col, Row, Container, } from 'reactstrap'
import Navibar from '../layout/Navibar'
import Footer from '../layout/Footer'
import Jumbo from '../layout/Jumbo'
import RecipeMain from '../recipeCrud/RecipeMain'
import {AuthContext} from '../auth/AuthContext'
 

class Splash extends React.Component {
    constructor(props) {
        super(props)
        this.state={

        }
    }
                    logout = () => {
                        this.setState({
                          sessionToken: '',
                        })
                        localStorage.clear();
                      }
render(){
    return (
        <div>
           <Row>
                <Navibar />
                <RecipeMain />
              </Row>
            <Container>
              <Row>
                <Jumbo />
              </Row>
            </Container>
            <Row>
              <Footer clickLogout={this.logout} />
              </Row>
        </div>
    )
}
}
export default props => (
    <AuthContext.Consumer>
        {auth=> <Splash {...props} auth={auth} />}
    </AuthContext.Consumer>
)