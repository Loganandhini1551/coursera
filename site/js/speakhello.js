

/*function hellospeaker(name){
	console.log(name);
}*/








(function (window){
	var names = ['Yaakov', 'John', 'Jen', 'Jason', 'Paul', 'Frank', 'Larry', 'Paula', 'Laura', 'Jim'];
	var hellospeaker={};
	var speakword='Good Bye';
	hellospeaker.speak=function(name) {

  console.log(speakword +" "+ name);

}
window.hellospeaker=hellospeaker;
})(window);
