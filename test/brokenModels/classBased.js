const { Model } = require('sequelize');

const model = (sequelize, DataTypes) => {
    class Broken extends Model {
        static associate(models) { }
    }
    Broken.init({ id: DataTypes.INTEGER }, { sequelize, modelName: 'Broken' })
    return Broken;
}

module.exports = model;
