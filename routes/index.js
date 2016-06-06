
// routes/index.js
var express = require('express');
var app = express();
var fs = require("fs");
        console.log("\n *START* \n");
		 var content = JSON.parse(fs.readFileSync('./values.json', 'utf8'));
        //var content = fs.readFileSync("./values.json");
        console.log("Output Content : \n"+ content);
		console.log("Output Array : \n"+ JSON.stringify(content));
		console.log("Output object : \n"+ content[0].lat);
		console.log("Output length : \n"+ content.length);
        console.log("\n *EXIT* \n");
		var latarray=[];
		var longarray=[];
		var moistarray=[];
		for (i=0;i<content.length;i++)
		{
			latarray[i]=content[i].lat;
			
		}
		for (i=0;i<content.length;i++)
		{
			longarray[i]=content[i].long;
			
		}
		for (i=0;i<content.length;i++)
		{
			moistarray[i]=content[i].moisture[0]*100;
			
		}		
		
app.set('view engine', 'pug');
 
/* GET home page. */
app.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
 
app.get('/map', function(req,res) {
    
        res.render('map', {
       
            values:latarray,
			longvalues:longarray,
			moistvalues:moistarray
			
        });
   
}); 


 
module.exports = app;