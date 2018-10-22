// var express = require('express')
// var router = express.Router()
// var sequelize = require('../db')
// var Weight = sequelize.import('../models/weightModel.js')

// router.get("/getall", (req, res) => {
//     Weight.findAll({})
//     .then(weight => res.status(200).json(weight))
//     .catch(err=> res.status(500).json({error:err}))
// })

// router.post("/create", function(req,res) {
//     var weight = req.body.weight
//     var inactive = req.body.weight
//     var active = req.body.active
//     var veryActive = req.body.veryActive

//     Weight.create({
//         weight: weight,
//         inactive: inactive,
//         active: active,
//         veryActive: veryActive
//     }).then(
//         function createSuccess(weight) {
//             res.json({
//                 weight: weight,
//                 message: "added"
//             })
//         }
//         )

// })

// module.exports = router