var express = require('express'); 
var app = express(); 
var cat = require('./controllers/catcontroller')

app.use('/cat', cat)
app.listen(3000, function(){
    console.log('App is listening on 3000.')
})