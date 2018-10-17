module.exports = (sequelize, DataTypes) => {

    const Recipe = sequelize.define('recipe', {
        recipeName: {
        type: DataTypes.STRING,
        allowNull: false
        },
        ingredients: {
        type: DataTypes.STRING,
        allowNull: false
        },
        cookTime:{
         type: DataTypes.INTEGER,
         allowNull: false
        },    
        yield: {
        type: DataTypes.INTEGER,
        allowNull: false
        },
        calPerCup: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return Recipe
}