require('dotenv').config();

var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var sequelize = require('./db')
var user = require('./controllers/usercontroller')
var recipe = require('./controllers/recipecontroller')

sequelize.sync()
app.use(bodyParser.json())
app.use('/user', user)
app.use('/recipe', recipe)
app.use(require('./middleware/validate-session'))
app.use(require("./middleware/headers"))



app.listen(process.env.PORT, function() {
    console.log(`server on ${process.env.PORT}`)
})