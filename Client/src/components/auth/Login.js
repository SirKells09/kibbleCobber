import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button, Container, Col, } from 'reactstrap';
import {AuthContext} from './AuthContext'
import APIURL from '../../helpers/environment'
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: ""
    };
}

handleChange = event => {
    this.setState({
        [event.target.name]: event.target.value,
    })
}

handleSubmit = (event) => {
fetch(`${APIURL}/user/login`,{
    method: 'POST',
    body:JSON.stringify({
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        password: this.state.password
    }),
    headers: new Headers({
        'Content-Type': 'application/json'
    })
 }) 
 .then(response => response.json())
    .then((data) => {
        this.props.auth.setToken(data.sessionToken)
    });
    console.log(this.state)
  event.preventDefault();

}

 render(){
        return (
            
    
            <Container>
              
                <h1>Login</h1>
               
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup >
                        <Label for="email" size="lg">Email</Label>
                        <Input id="email" type="textArea" name="email" placeholder="enter email" onChange={this.handleChange}/>
                    {' '}
                    </FormGroup>
                   
               
                    <FormGroup>
                        <Label for="password" size="lg">Password</Label>
                        <Input id="password" type="password" name="password" placeholder="enter password" onChange={this.handleChange}/>
                    {' '}
                    </FormGroup>
                  
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Button color="primary" type="submit"> Submit </Button>
                        </Col>
                </Form>
               
                <h6> Register<Button onClick= { this.props.toggleForm }>HERE</Button> if you do not have an account.</h6>
            </Container>
          
        )
    }
}
export default props => (
    <AuthContext.Consumer>
        {auth=> <Login {...props} auth={auth} />}
    </AuthContext.Consumer>
)
   

