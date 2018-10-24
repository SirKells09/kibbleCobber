var express = require('express')
var router = express.Router()
var sequelize = require('../db')
var validateSession = require('../middleware/validate-session')
var Recipe = sequelize.import('../models/recipeModel.js')

router.get('/getall', (req, res) => {
    Recipe.findAll({})
        .then(recipe => res.status(200).json(recipe))
        .catch(err => res.status(500).json({ error: err }))
})

router.post('/create', function (req, res) {
    var recipeName = req.body.recipeName
    var ingredients = req.body.ingredients
    var cookTime = req.body.cookTime
    var amount = req.body.amount
    var notes = req.body.notes

    Recipe.create({
        recipeName: recipeName,
        ingredients: ingredients,
        cookTime: cookTime,
        amount: amount,
        notes: notes,
    }).then(
        function createSuccess(recipe) {
            res.json({
                recipe: recipe,
                message: "Recipe Added"
            })
            function createError(err) {
                res.send(500, err.message);
            }
        }

    )
})



router.put(`/:id`, (req, res, next) => {
    console.log(req.body.recipeName)
    Recipe.update(
        {
            recipeName: req.body.recipeName,
            ingredients: req.body.ingredients,
            cookTime: req.body.cookTime,
            amount: req.body.amount,
            notes: req.body.notes
        },
        { returning: true, where: { id: req.params.id } },
    )
        .then(function ([updatedRecipe]) {
            res.json(updatedRecipe)
        }).catch(next)
})

router.delete('/delete/:id', (req, res) => {
    var data = req.params.id;
    Recipe.destroy({
        where: { id: data }
    })
        .then(recipe => res.status(200).json(recipe))
        .catch(err => res.status(500).json({
            error: err
        })
        )
})

module.exports = router