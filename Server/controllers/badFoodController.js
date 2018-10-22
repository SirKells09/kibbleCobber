var express = require('express')
var router = express.Router()
var sequelize = require('../db')
var BadFood = sequelize.import('../models/badFoodModel.js')

router.get("/getall", (req, res) => {
   BadFood.findAll({})
    .then(weight => res.status(200).json(weight))
    .catch(err=> res.status(500).json({error:err}))
})

router.post("/make", function(req,res) {
   var badFood= req.body.badFood
   var reason= req.body.reason

    BadFood.create({
        badFood:badFood,
        reason:reason
        
    }).then(
        function createSuccess(badFood) {
            res.json({
                badFood: badFood,
                message: "added"
            })
        }
        )

})

module.exports = router