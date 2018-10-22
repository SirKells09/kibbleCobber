import React from 'react'
import { Table, Button, Container, Col, Row} from 'reactstrap'

const RecipeTable =(props) => {
    return (
        <div className='recipe'>
        
            <h3>Recipes</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Recipe</th>
                        <th>Ingredients</th>
                        <th>Time</th>
                        <th>Amount</th>
                        <th>notes</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody >{
                    props.recipe.map((recipe, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{recipe.id}</th>
                                    <td>{recipe.recipeName}</td>
                                    <td >{recipe.ingredients}</td>
                                    <td >{recipe.cookTime}</td>
                                    <td >{recipe.amount}</td>
                                    <td >{recipe.notes}</td>
                                    <td>
                                        <Button id={recipe.id} onClick={props.delete}color="danger" >DELETE</Button>
                                        <Button id={recipe.id} onClick={e => props.update(e, recipe)} color="warning">UPdate</Button>
                                      
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </Table>
        </div>
    )}

    export default RecipeTable