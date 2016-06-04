
// routes/index.js
var express = require('express');
var app = express();

app.set('view engine', 'pug');
 
/* GET home page. */
app.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
 
app.get('/map', function(req,res) {
    
        res.render('map', {
       
            lat : 40.7848,
            lng : -73.9598
        });
   
}); 


 
module.exports = app;