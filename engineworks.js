// engineworks.js
var exports = module.exports = {};


exports.checkFoDate = function(x){
    var month = ['Januray','February','March','April','May','June','July','August','September','October','November','December'];
    var result = {
        "unix" : null,
        "natural" : null
    };
    var data = parseInt(x);
    var date, unix;
    
    if(isNaN(data) || x.indexOf(" ")>-1 || x.indexOf(",")>-1){
        date = new Date(x);
    } else if(x.indexOf("%")==-1 && x.indexOf("-")==-1 && x.indexOf(".")==-1 && x.indexOf(",")==-1){
        data = data*1000;
        date = new Date(data);  
    } else {
        return JSON.stringify(result);
    }
    if(date.toString() === 'Invalid Date') { 
        return JSON.stringify(result);
    } else {
        result["unix"] = Date.parse(date)/1000;
        result["natural"] = month[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
        return JSON.stringify(result);
    }
}


// result["unix"] = Date.parse(date);
// result["natural"] = month[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
// var answer = JSON.stringify(result);
// { "unix": 1450137600, "natural": "December 15, 2015" }
