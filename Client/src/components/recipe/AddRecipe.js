import React from 'react'
import {Container, Row, Col, Table, Input, Button, Form} from 'reactstrap'

class AddRecipe extends React.Component {
    constructor(props) {
        super(props)
        this.state={

        }
    }
 handleOnClick
render(){
    return(
<div>
    <Container>
        <Row>
        <Form>
       
        <Button onClick= {this.props.toggleForm}>Search Recipe</Button>
       
        </Form>
        </Row>
        </Container>
        </div>
    )
}
}
export default AddRecipe