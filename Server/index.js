require('dotenv').config();

var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var sequelize = require('./db')
var user = require('./controllers/usercontroller')
var recipe = require('./controllers/recipecontroller')
var badFood = require('./controllers/badFoodController')
// var weight = require('./controllers/weightController')
// var image = require('./controllers/imageController')
const port = process.env.PORT || 3000;
sequelize.sync()

app.use(bodyParser.json())
app.use(require("./middleware/headers"))
app.use('/user', user)
app.use('/recipe', recipe)
app.use('/unhealthy', badFood)
app.use(require('./middleware/validate-session'))
// app.use('/weight', weight)
// app.use('/image', image)


app.listen(`${process.env.PORT}`, function() {
    console.log(`server on ${process.env.PORT}`)
})