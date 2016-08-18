var express = require('express')
var app = express();
var path = require('path');
var engineworks = require('./engineworks.js');


app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/:datas',function(req,res){
    res.send(engineworks.checkFoDate(req.params.datas));
})

app.listen(8080, function(){
    console.log('Example listening on port 8080');
});

