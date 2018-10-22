// var express = require("express");
// var router = express.Router();
// var sequelize = require('../db')
// var Image = sequelize.import('.././models/imageModel')
// var validateSession = '../middleware/validate-session.js'

// router.get('/getall', (req, res) => {
//     Recipe.findAll({})
//     .then(recipe => res.status(200).json(recipe))
//     .catch(err => res.status(500).json({error: err}))
// })

// router.post('/create', function(req, res) {
//     var recipeName = req.body.recipeName
//     var ingredients= req.body.ingredients
//     var cookTime= req.body.cookTime
//     var amount = req.body.amount
//     var notes= req.body.notes
         
//      Recipe.create({ 
//          recipeName: recipeName,
//          ingredients: ingredients,
//          cookTime: cookTime,
//          amount: amount,
//           notes: notes,
//           }).then(
//             function createSuccess(recipe) {
//                  res.json({
//                      recipe: recipe,
//                      message: "Recipe Added"
//                  })
//                  function createError(err) {
//                      res.send(500, err.message);
//                  }
//              }
            
//           )
//          })

// module.exports=Image