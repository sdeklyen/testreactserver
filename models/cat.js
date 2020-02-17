module.exports = (sequelize, DataTypes) => {
    const Cat = sequelize.define('cat', {

        catName: {
            type: DataTypes.STRING, 
            allowNull: false
        },

        catAge: {
            type: DataTypes.INTEGER, 
            allowNull: false
        },

        catColor: {
            type: DataTypes.STRING, 
            allowNull: false
        }, 

        catMedicine: {
            type: DataTypes.STRING, 
            allowNull: true
        }, 

        catOtherInfo: {
            type: DataTypes.STRING, 
            allowNull: true
        }
    })

    return Cat;
}