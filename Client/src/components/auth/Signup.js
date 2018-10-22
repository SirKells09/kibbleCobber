import React, { Component } from "react";
import { Form, FormGroup,  Input, Button, Container, Col, Row } from 'reactstrap';
import {AuthContext} from './AuthContext'
import APIURL from '../../helpers/environment'

class Signup extends Component {
                constructor(props) {
                  super(props);
                  this.state = {
                    firstname: "",
                    lastname: "",
                    email: "",
                    password: ""
                  };
                }
              
                handleChange = event => {
                  this.setState({
                    [event.target.name]: event.target.value
                  });
                };
              
              
                handleSubmit = event => {
                  fetch(`${APIURL}/user/create`,{
                    method: "POST",
                    body: JSON.stringify({ 
                      firstname: this.state.firstname,
                      lastname: this.state.lastname,
                      email: this.state.email,
                      password: this.state.password
                    }),
                    headers: {
                      "Content-Type": "application/json",
                    }
                  })
                  .then(response => response.json())
                  .then(data => {
                    console.log(data)
                    this.props.auth.setToken(data.sessionToken);
                  });
                  event.preventDefault();
                };
              
                render() {
                  return (
                    <Container >
                      <h1>Sign Up</h1>
                      <h6>Sign up information</h6>
                      <Form onSubmit={this.handleSubmit}>
                      <Row form>
                      <Col md={6}>
                        <FormGroup>
                          <Input
                            id="firstname"
                            type="text"
                            name="firstname"
                            placeholder="First Name"
                            bsSize="sm"
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                        </Col>
                        <Col>
                        <FormGroup>
                          <Input
                            id="lastname"
                            type="text"
                            name="lastname"
                            placeholder="Last Name"
                            bsSize="sm"
                            onChange={this.handleChange}/>
                        </FormGroup>
                        </Col>
                        </Row>
                        <Row form>
                        <Col md={6}>
                        <FormGroup >
                          <Input
                            id="email"
                            type="text"
                            name="email"
                            placeholder="Email"
                            bsSize="sm"
                            onChange={this.handleChange}/>
                        </FormGroup>
                        </Col>
                        <Col>
                        <FormGroup>                       
                          <Input
                            id="su_password"
                            type="password"
                            name="password"
                            minLength="6" required
                            placeholder="Password: 6 characters minimum"
                            bsSize="sm"
                            onChange={this.handleChange}/>
                        </FormGroup>
                        </Col>
                        </Row>
                        <FormGroup>
                        <Button color="primary" type="submit" >submit</Button>
                        </FormGroup>
                      </Form>
            
            <div>
                <h6> Login <Button size="sm" color="secondary" onClick= {this.props.toggleForm}>CLICK</Button> if you already have an account.</h6>
                </div>
            </Container>
        )
    }
}

export default props => (
  <AuthContext.Consumer>
      {auth=> <Signup {...props} auth={auth} />}
  </AuthContext.Consumer>
)
 
