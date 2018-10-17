import React from 'react'
import { Container, Col, Row } from 'reactstrap';
import RecipeTable from './RecipeTable'
import {AuthContext} from "../auth/AuthContext"

class RecipeMain extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "recipe": {
                "recipeName": "",
                "ingredients": "",
                "cookTime": "",
                "yield": "",
                "calPerCup": ""
            },
            updatePressed: false,
            recipeToUpdate: {}
        }
    }
        componentWillMount(){
            this.fetchRecipes()
        }
        fetchRecipes = () => {
            fetch("http://localhost:3000/recipe/getall",{
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": this.props.auth.sessionToken
                }}
            )
            .then((res)=>res.json())
            .then((logData) => {
                return this.setState ({ recipe:logData})
            })
}
render(){
    const recipe = this.state.recipe.length >= 1 ?
    <RecipeTable recipe={this.state.recipe} delete={this.commentDelete} update={this.setUpdatedComment} /> :
    <div>No</div>
    return (
      <div className="App">
      <Container>
      
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            {recipe}
          </Col>
        </Row>
   
      </Container>
      </div>
    )
  }
}
export default props => (
    <AuthContext.Consumer>
        {auth=> <RecipeMain {...props} auth={auth} />}
    </AuthContext.Consumer>
  )
