import React from 'react'
import { Container,Row,Button,Col } from 'reactstrap'
import {AuthContext} from '../auth/AuthContext'
import APIURL from '../../helpers/environment'



class Footer extends React.Component {
    render(){
        return(

<Container >
        <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
                <footer>
                    
                     <Button className='navButton' onClick={()=>this.props.clickLogout()}>Logout</Button>
                     <Button className='navButton' href={`${APIURL}/UserSettings`}>Need Help?</Button>
                    
                     </footer>
                
            </Col>
          </Row>
</Container>

           

        )
    }
}
export default props => (
    <AuthContext.Consumer>
      {auth => <Footer {...props} auth={auth} />}
    </AuthContext.Consumer>
  )
  