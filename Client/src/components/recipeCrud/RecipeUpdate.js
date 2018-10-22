

import React from 'react'
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, Col } from 'reactstrap';

class RecipeUpdate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            recipeName: "",
            ingredients: "",
            cookTime: [],
            amount: [],
            notes: "",
            modal: true
        }
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
        componentWillMount() {
            this.setState({
                id: this.props.recipe.id,
                recipeName: this.props.recipe.recipeName,
                ingredients: this.props.recipe.ingredients,
                cookTime: this.props.recipe.cookTime,
                amount: this.props.recipe.amount,
                notes: this.props.recipe.notes
            })
        }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state)
    }


    render() {

        return (
            <Col>

                <Modal isOpen={this.state.modal} size="md" >
                    <ModalHeader>Edit your recipe</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="recipeName">Recipe Name</Label>
                                <Input id="recipe" type="text" name="recipeName" value={this.state.recipeName} 
                                    placeholder="enter result" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="ingredients">Ingredients</Label>
                                <Input id="ingredients" type="textarea" name="ingredients" value={this.state.ingredients}
                                    placeholder="enter result" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="cookTime">Cook Time</Label>
                                <Input id="cookTime" min="0" step="1" type="number" name="cookTime" value={this.state.cookTime}
                                    placeholder="enter result" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="amount">Amount</Label>
                                <Input type="number" name="amount" min="0" step="1" id="amount" value={this.state.amount} onChange={this.handleChange} placeholder="How Many cups?">
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="notes">Notes</Label>
                                <Input id="notes" type="textarea" name="notes" value={this.state.notes} placeholder="enter notes" onChange={this.handleChange} />
                            </FormGroup>
                            <Button type="submit" color="primary"  > Submit </Button>
                            <Button color="danger" className="close" onClick={this.toggle}>Close</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </Col>
        )
    }
}



export default RecipeUpdate