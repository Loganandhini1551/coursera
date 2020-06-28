 var dev=[];
var ded=[];
var names = ['Yaakov', 'John', 'Jen', 'Jason', 'Paul', 'Frank', 'Larry', 'Paula', 'Laura', 'Jim'];
  for (var i=0;i<names.length;i++){
   dev[i]=names[i].charAt(0);
   ded[i]=dev[i].toLowerCase();
  if(ded[i]=="j")
  {
  	hellospeaker.speak(names[i]);
  }
  else{
  byeSpeaker.speak(names[i]);
  }
  }