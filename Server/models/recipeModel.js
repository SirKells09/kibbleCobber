module.exports = (sequelize, DataTypes) => {
    return sequelize.define('recipe', {
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
        amount: {
        type: DataTypes.INTEGER,
        allowNull: false
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}