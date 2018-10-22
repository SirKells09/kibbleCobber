var express = require("express");
var router = express.Router();
var sequelize = require("../db");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var validateSession= require('.././middleware/validate-session')
var User = sequelize.import("../models/userModel");

router.post("/create", function(req, res) {
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var email = req.body.email;
  var password = req.body.password;

  User.create({
    firstname: firstname,
    lastname: lastname,
    email: email,
    passwordhash: bcrypt.hashSync(password, 10)
  }).then(
    function createSuccess(user) {
      var token = jwt.sign({id:user.id}, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24
      });
      res.json({
        user: user,
        message: "created",
        sessionToken: token
      });
   
    function createError(err) {
      res.send(500, err.message);
     } 
    }  
  )
  })


router.get('/get', function (req, res) {
  User.findAll()
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json({error: err}))
})

router.post("/login", function(req, res, next) {
  User.findOne({ where: { email: req.body.email } }).then(
    function(user) {
      if (user) {
        bcrypt.compare(req.body.password, user.passwordhash, function(
          err,
          matches
        ) {
          if (matches) {
            var token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
              expiresIn: 60 * 60 * 24
            });
            res.json({
              user: user,
              message: "successfully authenticated",
              sessionToken: token
            });
          } else {
            res.status(502).send({ error: "authentification failed" });
          }
        });
      } else {
        res.status(500).send({ error: "authentification failed" });
      }
    },
    function(err) {
      next(err);
      console.log(err);
    }
  );
})

router.delete('/delete/:email',validateSession, (req, response) => {
 var userEmail = req.params.email;
  User.destroy({
          where: {email: userEmail}
      })
      .then(user => response.status(200).json(user))
      .catch(err => response.status(500).json({
            error: err
          })
          )})
  
    

 
      
module.exports = router