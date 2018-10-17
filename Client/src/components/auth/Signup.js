import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button, Container, Col, Row } from 'reactstrap';
import {AuthContext} from './AuthContext'

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
                  fetch("http://localhost:3000/user/create", {
                    method: "POST",
                    body: JSON.stringify({ 
                      firstname: this.state.firstname,
                      lastname: this.state.lastname,
                      email: this.state.email,
                      password: this.state.password
                    }),
                    headers: {
                      "Content-Type": "application/json"
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
                          <Label for="firstname">first name</Label>
                          <Input
                            id="firstname"
                            type="text"
                            name="firstname"
                            placeholder="enter first name here"
                            bsSize="sm"
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                        </Col>
                        <Col>
                        <FormGroup>
                          <Label for="lastname">last name</Label>
                          <Input
                            id="lastname"
                            type="text"
                            name="lastname"
                            placeholder="enter last name here"
                            bsSize="sm"
                            onChange={this.handleChange}/>
                        </FormGroup>
                        </Col>
                        </Row>
                        <Row form>
                        <Col md={6}>
                        <FormGroup >
                          <Label for="email">email</Label>
                          <Input
                            id="email"
                            type="text"
                            name="email"
                            placeholder="enter email here"
                            bsSize="sm"
                            onChange={this.handleChange}/>
                        </FormGroup>
                        </Col>
                        <Col>
                        <FormGroup>                       
                          <Label for="password">Password</Label>
                          <Input
                            id="su_password"
                            type="password"
                            name="password"
                            placeholder="enter password here"
                            bsSize="sm"
                            onChange={this.handleChange}/>
                        </FormGroup>
                        </Col>
                        </Row>
                        <FormGroup>
                        <Button color="primary" type="submit">submit</Button>
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
 
