const Sequelize = require('sequelize'); 
const sequelize = new Sequelize('grastontestreactserver', 'postgres', 'gooper17', {
    host: 'localhost', 
    dialect: 'postgres'
}); 

sequelize.authenticate().then(
    function() {
        console.log('Connected to postgres database'); 
    },
    function(err){
        console.log(err);
    }
);

module.exports = sequelize;