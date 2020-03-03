var express = require('express'); 
var app = express(); 
var cat = require('./controllers/catcontroller')
const sequelize = require('./db');
sequelize.sync();
app.use(express.json());
app.use(require('./middleware/headers'));

app.use('/cat', cat)
app.listen(3001, function(){
    console.log('App is listening on 3001.')
})