import React from 'react';
import { Row, Container, Alert } from 'reactstrap'
import Footer from '../layout/Footer'
import Jumbo from '../layout/Jumbo'
import LittleAlert from '../layout/LittleAlert'

import { AuthContext } from '../auth/AuthContext'




class Splash extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sessionToken: '',
          visible: false

        }
    }
  
    logout = () => {
        this.setState({
            sessionToken: '',
            visible: true
        })
        localStorage.clear();
    }
    render() {
        return (
            <div>
                <hr/>
                        <LittleAlert isOpen={this.state.visible}/>
                    <Jumbo />
                    <Row>
                        <Footer clickLogout={this.logout} />
                    </Row>
        
            </div>
        )
    }
}


export default props => (
    <AuthContext.Consumer>
        {auth => <Splash {...props} auth={auth} />}
    </AuthContext.Consumer>
)