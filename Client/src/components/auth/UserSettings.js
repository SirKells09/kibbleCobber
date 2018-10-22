import React from 'react'
import { Card, CardTitle, CardText, Col, Row, Container, Button, Input, Label } from 'reactstrap'
import { AuthContext } from './AuthContext'
import AccModal from '../modals/AccModal'
import EmailModal from '../modals/AccModal'
import APIURL from '../../helpers/environment';

class UserSettings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: [],
            id: "",
            modal: false,
            email: ""
        }

    }
   

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    onTodoChange(value) {
        this.setState({
            email: value
        });
    }

    // handleChange = (event) => {
    //     console.log(this.state)
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }

    fetchUsers = () => {
        fetch(`${APIURL}/user/get`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((user) => {
                return this.setState({ user: user, id: user.id })

            });
        console.log(this.state)
    }


    deleteUser = (e) => {
        console.log()
        fetch(`${APIURL}/user/delete/${e.target.id}`, {
            method: 'DELETE',
            body: JSON.stringify({ user: { email: e.target.id } }),
        })
            .then((response) => this.fetchUsers())
    }



    render() {
        return (


            <Container>
                <EmailModal head="Update You Info" />

                <AccModal show={this.state.modal} toggle={this.toggle} head="okeyDokey" />


                <div className='userSettings'>

                     <hr />
                    <h1>Change Info</h1>
                  <hr />
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Card body inverse color="info" className="text-center">
                                <CardTitle>Email Us Anytime</CardTitle>

                                <CardText> Concerns, Questions, or Absolutely Anything!</CardText>
                                <Button color="primary" variant='contained' size="lg" onClick={this.toggle2}>Email Customer Service</Button>{' '}
                            </Card >
                        </Col>
                    </Row>
                   
                    <hr />
                    <hr />
                    <hr />
           
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Row>
                            <Card body inverse color="warning" body className="text-center">
                                <CardTitle>Information</CardTitle>
                                <Button onClick={this.toggle}>Change Info</Button>{' '}
                                <CardText>
                                    Check and Change your Account Information
                                </CardText>
                            </Card>
                        </Row>
                    </Col>
                    <hr />
                    <hr />
                    <hr />
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Card body inverse color="danger" className="text-center" >
                                <div  >
                                    <CardTitle>Delete User</CardTitle>
                                    <Input type="email" id="emailAddress" className="form-control" onChange={e => this.onTodoChange(e.target.value)} placeholder="Email" />
                                    <Button id={this.state.email} onClick={this.deleteUser} >Delete User</Button>
                                    <CardText>Can not be Undone!</CardText>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <hr />
                    <hr />
                </div>
            </Container>


        )
    }
}
export default props => (
    <AuthContext.Consumer>
        {auth => <UserSettings {...props} auth={auth} />}
    </AuthContext.Consumer>
)