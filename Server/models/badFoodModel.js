module.exports = function(sequelize, DataTypes) {
    return sequelize.define("badFood", {
     badFood:{
        type: DataTypes.STRING
      },
     reason: {
        type:DataTypes.STRING
     }
  
    });
  };