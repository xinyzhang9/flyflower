var data = require('./data/p2.json');
var fs = require('fs');
console.log(data.length);

var res_obj = {};

for(var p of data){
    var key = p.d_title;
    res_obj[key] = p;
}

fs.writeFile('./data/p3.json', JSON.stringify(res_obj), 'utf8');
