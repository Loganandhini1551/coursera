(function(window){
	var greeternandhu={};
greeternandhu.name="nandhu";
var greeting="hello";
greeternandhu.sayhi=function  () {
	console.log(greeting + greeternandhu.name);
}
window.greeternandhu=greeternandhu;
})(window);
