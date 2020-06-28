/*if ( false || "" || null || undefined ||0||NaN){
	console.log("this line never gets executed")
}
else{
	console.log("it is false");
}
if (true||"hello"||1||-1|| "FALSE"){
	console.log("it is true")
}
function a(){
	return{
		name:"LoganandhiniChellamuthu"
	}
}
function b()
{
	return;
	{
	name:"LoganandhiniChellamuthu"	
	}
}
console.log(a());
console.log(b());
var sum=0;
var i=0;
 for( i=0;i<10;i++){
 	sum=sum + i;
 }
 console.log(sum);
 function a (dish){
 	dish=dish|| "noddles"
 	console.log("chicken with"+dish);
 }
 a();
 a("noodles");
 var x = 10;
if ( (null) || "Hello" || x > 5 ) {
  console.log("Hello");
}
var company = new Object();
company.name = "facebook";
company.ceo = new Object();
company.ceo.firstname="mark";
company.ceo.favcolor="blue"
console.log(company);
console.log("company ceo name is"+company.ceo.firstname);
console.log(company["name"]);
company["stock of company"]=110;
console.log("stock of company is"+company["stock of company"]);
var salary="salary of company";
company[salary]=1000;
console.log(company[salary]);

var facebook={
	ceo : {
		firstname: "mark",
		favcolor : "blue"
	},
	"stock of company":100
};
console.log(facebook);
console.log(facebook["stock of company"]);

function multiply(x,y){
	return x*y;
}
multiply.version="1.1"
console.log(multiply.version);

function makemultiply(multiply){
	var myfun = function(x){
		return x*multiply;
	};
	return myfun;
}
var multiplyby3=makemultiply(2);
console.log(multiplyby3(3));
var multiplyby5=makemultiply(10)
console.log(multiplyby5(2));

function multi(x,operation){
	return operation(x);
}
var result=multi(5,multiplyby3);
console.log(result);
result=multi(4,multiplyby5);
console.log(result);

var a=5;
var b=a;
console.log(a);
console.log(b);

b=7
console.log(a);
console.log(b);

var a={x:5};
var b=a;
console.log(a);
console.log(b);

b.x=7;
console.log(a);
console.log(b);

function art(x){
	console.log(x);
	x=7;
	console.log(x);
}
var t = 3;
art(t);
console.log(t);

function art(x){
	console.log(x);
     x.s=5;
     console.log(x);
}
var y={s:4}
art(y);
console.log(y);

function arbit (){
this.myname="ln";
}
arbit();
console.log(window.myname);

function Circle(radius){
  this.radius=radius;
}
Circle.prototype.getArea=
	function (){
		return Math.PI * Math.pow(this.radius,2);
	};
var mycircle=new Circle(10);
console.log(mycircle);
var myseccircle=new Circle(20);
console.log(myseccircle.getArea());

var literalcircle={
	radius:10,
	getArea:function (){
		var self=this;
		console.log(this);
		var increaseradius =function (){
			self.radius=20;
		};
		increaseradius();
		console.log(self.radius);
		return Math.PI * Math.pow(this.radius,2)
	}
};
console.log(literalcircle.getArea());


var array=new Array();
array[0]="nandhu";
array[1]="dinu";
array[2]=1551;
array[3]={course:"CSS,HTML,JS"};
array[4]=function (name){
	console.log("name:"+name);
}
console.log(array[1]+array[0]);
array[4]("nandhudinu");
array[4](array[0]+array[1]);

var names=["Loganandhini","Dineshkumar","Santhiya","Senathipathi","Poongodi","Chellamuthu","Dhanvin"];
for (var i=0;i<names.length;i++){
	console.log("hello "+names[i]);
}
names[100]="nandhini";
for (var i=0;i<names.length;i++){
	console.log("hello "+names[i]);
}

var names2=["Loganandhini","Dineshkumar","Santhiya","Senathipathi","Poongodi","Chellamuthu","Dhanvin"];
myobj={
	name:"nandhu",
	coursename:"HTML/CSS/JS"
};
for (var tes in myobj){
	console.log(tes + ":" + myobj[tes]);
}
for (var tes in names2){
	console.log("hello "+names2[tes]);
}
names2.greeting="hi";
for (var tes in names2){
	console.log("hello "+names2[tes]);
}

//closure

function makemultiplier(multiplier){
	return (
		function (x){
			return multiplier*x;
		}
	)
}
var check=makemultiplier(5);
console.log(check(10));*/






















