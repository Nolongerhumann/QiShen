let img;
let counter=0;

function preload(){

img=loadImage("Bas.jpeg");
}



function setup() {
  createCanvas(400,400);
}


// img.loadPixels();
// image(image,0,0);





function draw() {
  background(220,220,220);
   image(img, 0, 0, width, height);
  
  let thisColor= img.get(counter,counter);
  fill(thisColor);
  rect(width/2.5,height/2.5,100,100);
  if(counter>400){
    counter=0}else{
      counter++}
  
  
  
  
  
}