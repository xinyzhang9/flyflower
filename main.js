var p_obj = null;
function loadJSON(file, callback) {   

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

function load() {
    
    loadJSON("data/poetry.json", function(response) {

        p_obj = JSON.parse(response);
        // console.log(p_obj);
        for(var p of p_obj){
        	console.log(p.d_author);
        	console.log(p.d_poetry);
        }
    });
}

function match(c){
	console.log(c);
	loadJSON("data/poetry.json", function(response) {

        p_obj = JSON.parse(response);
        // console.log(p_obj);
        for(var p of p_obj){
        	var content = p.d_poetry;
        	if(content.indexOf(c) >= 0){
        		console.log(content);
        	}
        }
    });
}

function init(){
	var x = encodeURIComponent("酒");
	console.log(x);
	// console.log(decodeURIComponent(x));
	match(x);
}

init();

