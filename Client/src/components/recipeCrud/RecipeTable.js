import React from 'react'
import {Table, Button} from 'reactstrap'

// recipeDelete = (event) => {
//     fetch('http://localhost:3000/')
    
// }
const RecipeTable =(props)=> {
return (
    <div className='recipeList'>
    <h3>Recipes</h3>
        <hr/>
<Table striped hover>
<thead>
<tr>
    <th>#</th>
    <th>Recipe</th>
    <th>Ingredients</th>
    <th>Time</th>
    <th>Yeild</th>
    <th>Cal</th>
</tr>
</thead>
<tbody>
    {
        props.recipe.map((recipe, id) => {
return(
<tr key={id}>
<th scope="row">{recipe.id}</th>
<th >{recipe.recipeName}</th>
<th >{recipe.ingredients}</th>
<th >{recipe.cookTime}</th>
<th >{recipe.calPerCup}</th>
<td>
    <Button id={recipe.id} onClick={props.delete}>DELETE</Button>
    <Button id={recipe.id} onClick={e => props.update(e, recipe)}>UPdate</Button>
</td>
</tr>
)
})
}
</tbody>

</Table>
    </div>
)
}


 
export default RecipeTable;
