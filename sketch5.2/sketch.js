let beat;


function preload(){
  
  beat = loadSound("sketch5.2/beat.mp3");
}




function setup() {
  background(200,30,60);
  createCanvas(400, 400);
  beat.loop();
  
}


function mouseMoved() {
  draw()
}


function draw() {
  background(220,220,70);
  
  let speed = map(mouseX,0,width,-6.0,6.0);
   beat.rate(speed);
  
  
}