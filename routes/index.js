

var express = require('express');
var app = express();
var fs = require("fs");
        console.log("\n *START* \n");
         var content = JSON.parse(fs.readFileSync('./airquality.json', 'utf8'));
        console.log("Output Content : \n"+ content);
        console.log("Output Array : \n"+ JSON.stringify(content));
        console.log("Output object : \n"+ content.places);
        var placearray = content.places;
        console.log("Output length : \n"+ placearray.length);
        console.log("\n *EXIT* \n");
        var latarray=[];
        var longarray=[];
        var aqarray=[];
        for (i=0;i<placearray.length;i++)
        {
            latarray[i]=placearray[i].latitude_place1;
            
        }
        for (i=0;i<placearray.length;i++)
        {
            longarray[i]=placearray[i].longitude_place1;
            
        }
        for (i=0;i<placearray.length;i++)
        {
            console.log(placearray[i].air_quality_place1);
            aqarray[i]=placearray[i].air_quality_place1;
            
        }
        for (i=0;i<placearray.length;i++)
        {
            placearray[i]=placearray[i].Place;
            
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
            aqvalues:aqarray,
            placesvalues:placearray
            
        });
   
}); 


 
module.exports = app;