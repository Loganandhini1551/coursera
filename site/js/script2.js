(function(window){
	var greeterloganandhini={};
greeterloganandhini.name="Loganandhini";
var greeting="hi";
greeterloganandhini.sayhello=function  () {
	console.log(greeting + greeterloganandhini.name);
}
window.greeterloganandhini=greeterloganandhini;
})(window);