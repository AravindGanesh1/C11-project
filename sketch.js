var weight = [35,38,42,45,43,34,36,41,48,32];
function average_of_weight (){
var sum =0;
for(var a=0;a<weight.length;a++){
sum=sum+weight[a]
}
var avg=sum/weight.length;
console.log(avg)
}

function setup() {
  createCanvas(400,400);
average_of_weight();
}

function draw() 
{
  background(30);
}

 

