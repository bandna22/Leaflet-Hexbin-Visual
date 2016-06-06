
// routes/index.js
var express = require('express');
var app = express();
var fs = require("fs");
        console.log("\n *START* \n");
        var content = fs.readFileSync("./values.json");
        console.log("Output Content : \n"+ content);
        console.log("\n *EXIT* \n");
app.set('view engine', 'pug');
 
/* GET home page. */
app.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
 
app.get('/map', function(req,res) {
    
        res.render('map', {
       
            values:content
        });
   
}); 


 
module.exports = app;