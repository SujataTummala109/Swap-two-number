var a = prompt('Enter the first variable');
var b = prompt('enter the seconf variale');

function setup() {
  createCanvas(400, 400);
  //create and display the button
  var button = createButton('Click here to swap');
  button.mousePressed(swap);
}

function draw() {
  background(220);
}

function swap(){
  [a,b] = [b,a]
  console.log("the value for a:"+a);
  console.log("the value for b:"+b);
}