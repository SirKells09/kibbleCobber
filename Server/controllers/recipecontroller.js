var express = require('express')
var router = express.Router()
var sequelize = require('../db')
var Recipe = sequelize.import('../models/recipeModel.js')

router.get('/getall', (req, res) => {
    Recipe.findAll({
        
    })
    .then(recipe => res.status(200).json(recipe))
    .catch(err => res.status(500).json({error: err}))
})

router.post('/create', (req, res) => {
    // if (!req.errors){
    //     const recipeReq ={
    //         recipeName: req.body.recipe.recipeName,
    //         ingredients: req.body.recipe.ingredients,
    //         cookTime: req.body.recipe.cookTime,
    //         yield: req.body.recipe.yield,
    //         calPerCup: req.body.recipe.calPerCup
    //     }
    Recipe.create({
        recipeName: "cat",
        ingredients: "req",
        cookTime: 3,
        yield: 3,
         calPerCup: 2,
         }).then(data => {
             res.send("test")
         })
//     .then(recipe => res.status(200).json(recipe))
//     .catch(err => res.json(req.errors))
// }else{
//     res.status(500).json(req.errors)
// }
})

router.delete('/delete/recipe', (req, res) => {
    Recipe.destroy({
            where: {
                id: req.recipe.id }
        })
        .then(recipe => res.status(200).json(recipe))
        .catch(err => res.status(500).json({
            error: err
        })
        )}
)

module.exports = router;