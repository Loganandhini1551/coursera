/*function byeSpeaker(name){
	console.log(name);
}
*/






(function (window){
	var byeSpeaker={};
	var speakword = "Hello";
	byeSpeaker.speak=function (name) {

  console.log(speakword + " " + name);

}
window.byeSpeaker=byeSpeaker;
})(window);
