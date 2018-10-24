import React from 'react'
import { Container, Col, Row, Button } from 'reactstrap';
import RecipeTable from './RecipeTable'
import RecipeUpdate from './RecipeUpdate'
import RecipeAdd from './RecipeAdd'
import { AuthContext } from '../auth/AuthContext'
import APIURL from '../../helpers/environment';





class RecipeMain extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe: [],
      updatePressed: false,
      recipeToUpdate: {},
      addPressed: false
    }
  }

  toggle = () => {
    this.setState({
        updatePressed: !this.state.updatePressed
    });
}
  componentDidMount() {
    this.fetchRecipes();
  }

  toggleAddModal = () => {
    this.setState({
      addPressed: !this.state.addPressed
    })
  }

  setUpdatedRecipe = (event, recipe) => {
    this.setState({
      recipeToUpdate: recipe,
      updatePressed: true
    })

  }

  fetchRecipes = () => {
    fetch(`${APIURL}/recipe/getall`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": this.props.auth.token
      }
    }
    )
      .then(response => response.json())
      .then((recipeData) => {
        return this.setState({ recipe: recipeData })
      })
  }


  recipeDelete = (event) => {
    fetch(`${APIURL}/recipe/delete/${event.target.id}`, {
      method: "DELETE",
      body: JSON.stringify({ recipe: { id: event.target.id } }),
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": this.props.auth.token
      })
    })
      .then((res) => this.fetchRecipes())
  }

  recipeUpdate = (event, recipe) => {
    console.log(this.state)
    fetch(`/recipe/${recipe.id}`, {
      method: 'PUT',
      body: JSON.stringify({   
        recipeName: recipe.recipeName,
        ingredients: recipe.ingredients,
        cookTime: recipe.cookTime,
        amount: recipe.amount,
         notes: recipe.notes}),
      headers: {
        "Content-Type": 'application/json',
        "Authorization": this.props.auth.token
      }
    })
      .then((recipe) => {
        this.setState({ udpatePressed: false })
        this.fetchRecipes();
      })
  }



  render() {
    const recipe = this.state.recipe.length >= 1 ?
      <RecipeTable recipe={this.state.recipe} delete={this.recipeDelete} update={this.setUpdatedRecipe}/> : <div></div>
      
    return (



      <Container className="container-fluid" size="xl" >
      <hr/>
<Button onClick={this.toggleAddModal}>Add a recipe</Button>
        <Row>
          <Col size="xl">
            {recipe}
<Col>
            {
              this.state.addPressed ? <RecipeAdd updateRecipesArray={this.fetchRecipes} show={this.state.addPressed} toggle={this.toggleAddModal}/> :
              <div></div>
            }
            </Col>
<Col>
            {
              this.state.updatePressed ? <RecipeUpdate t={this.toggle} update={this.recipeUpdate} recipe={this.state.recipeToUpdate} />
              : <div></div>
            }
            </Col>
          </Col>

        </Row>





      </Container>

    )
  }
}

export default props => (
  <AuthContext.Consumer>
    {auth => <RecipeMain {...props} auth={auth} />}
  </AuthContext.Consumer>
)
