var data = require('./data/p3.json');
var fs = require('fs');
console.log(data.length);
var common = ['春','花','月','夜','水','人','酒','风','雨','红','好'];

String.prototype.trunkTitle = function(){
	var index = this.indexOf('】');
	return this.slice(index+1).trim();
}

var res_obj = {};
function match(c){
	var res = [];
	for(p in data){
		var poem = data[p]
		var content = poem.d_poetry.trunkTitle();
    	var sentenses = content.split('。');
    	for(sentense of sentenses){
    		if(sentense.includes(c)){
        		res.push({
        			sentense:sentense,
        			key: poem.d_title
        		});
        	}
    	}
    }
    res_obj[c] = res;
}
	
common.forEach(function(c){
	match(c);
})

fs.writeFile('./data/p5.json', JSON.stringify(res_obj), 'utf8');
