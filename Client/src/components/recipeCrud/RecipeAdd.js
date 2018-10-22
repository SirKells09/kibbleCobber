import React from 'react'
import { Modal, ModalBody, ModalHeader, Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import APIURL from '../../helpers/environment';

class RecipeAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: true,
            recipeName: "",
            ingredients: "",
            cookTime: [],
            amount: [],
            notes: ""
        }
        // recipes: [],
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    handleSubmit = event => {
        console.log(event);
        event.preventDefault();
        fetch(`${APIURL}/recipe/create`, {
            method: 'POST',
            body: JSON.stringify({
                recipeName: this.state.recipeName,
                ingredients: this.state.ingredients,
                cookTime: this.state.cookTime,
                amount: this.state.amount,
                notes: this.state.notes
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
            })

        })
            .then(response => response.json())
            .then(recipe => {
                console.log(recipe)
                this.props.updateRecipesArray()
                console.log(this.state)
            })
    }


    handleChange = event => {
        console.log(this.state)
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render() {
        return (
            <Col>



                <Modal isOpen={this.state.modal} size="lg" className="Modal">
                    <ModalHeader>Edit your recipe</ModalHeader>
                    <ModalBody>
                        <Form size="lg" onSubmit={this.handleSubmit} >
                            <Col size="fluid">
                                <Row>

                                    <Col md="6">
                                        <FormGroup >
                                            <Label for="recipeName">Recipe</Label>
                                            <Input type="text" name="recipeName" id="recipeName" value={this.state.recipeName} onChange={this.handleChange} placeholder="Clever Names Welcome" />
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label for="ingredients">Ingredients</Label>
                                            <Input type="textarea" name="ingredients" id="ingredients" value={this.state.ingredients} onChange={this.handleChange} placeholder="Everything you use">
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label for="cookTime">Cook Time</Label>
                                            <Input type="number" min="0" step="1" name="cookTime" id="cookTime" value={this.state.cookTime} onChange={this.handleChange} placeholder="How Long">
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label for="amount">Amount in Cups</Label>
                                            <Input type="number" min="0" step="1" name="amount" id="amount" value={this.state.amount} onChange={this.handleChange} placeholder="Amount of Food">
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>     <FormGroup>

                                <Label for='notes' size="small">Notes</Label>
                                <Input id="notes" type="textarea" name="notes" value={this.state.notes} placeholder="enter description" onChange={this.handleChange} />

                            </FormGroup></Col>
                            <Button type="submit" color="primary" size="lg" > Submit </Button>
                            <Button color="danger" className="close" onClick={this.toggle}>Close</Button>
                        </Form>
                    </ModalBody>
                </Modal>

            </Col>
        )
    }
}




export default RecipeAdd