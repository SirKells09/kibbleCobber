import React from 'react'
import {Card, CardTitle, CardText, Col, Row, Container, Button, Input, Label} from 'reactstrap'
import {AuthContext} from './AuthContext'
import AccModal from '../modals/AccModal'
import APIURL from '../../helpers/environment';
class UserSettings extends React.Component {
    constructor(props) {
        super(props)
        this.state={
                peps: [],
                id: "",
                modal: false
        }
        
    }
    fetchUsers = () => {
        fetch(`${APIURL}/user/get`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
            //   'Authorization': this.props.auth.sessionToken
            })
        })
     
          .then((res) => res.json())
            .then((peps) => {
              return this.setState({ users: peps })
            })
        }

    deleteUser = event => {
        console.log(event)
        fetch(`${APIURL}/user/delete`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.auth.sessionToken
            })
        })
        .then((res) => this.fetchUsers())
      }

       toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }

      handleSubmit() {

      }
      
      render(){
          return(
              
              
              <Container>


              <AccModal show={this.state.modal} toggle={this.toggle} head="okeyDokey"/>


        <div className='userSettings'>
    
        <h1>Change Info</h1>
            <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
            <Card body inverse color="info" className="text-center">
                    <CardTitle>Email Us Anytime</CardTitle>
                    <Label for="exampleEmail" sm={2}>Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
          <Label for="password" sm={3}>Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="Secret Password" />
          <Label for="password" sm={3}>Password</Label>

            <Input type="textarea" name="text" id="exampleText" />
                    <CardText> Concerns, Questions, or Absolutely Anything!
                    </CardText>
                    <Button color="primary" variant='contained' size="lg" active>Email Customer Service</Button>{' '}
            </Card >
    </Col>
    </Row>
        <br/>
                <Row>
        <Col sm="6">
                <Card body inverse color="warning" body className="text-center">
                <CardTitle>Edit Account</CardTitle>
                <Button onClick={this.toggle}>Change Info</Button>{' '}
                <CardText> 
                    </CardText>
                </Card>


                </Col>  
                <Col sm="6">
                <Card body inverse color="danger" body className="text-center">
                <CardTitle>Delete User</CardTitle>
                <Button size='sm' onClick={this.deleteUser}>Delete User</Button>
                <CardText> WHAT CAN WE HELP WITH?
                    </CardText>
                </Card>
                </Col>
                </Row>
                </div>
                </Container>
   
      
    )
}
}
export default props => (
    <AuthContext.Consumer>
        {auth=> <UserSettings {...props} auth={auth} />}
    </AuthContext.Consumer>
)