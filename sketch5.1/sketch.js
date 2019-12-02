let numberVertexes = 30;
let radius = 100;
let angle = 0;
let angleVelocity= 0;



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220,20,50);
  
  translate(width/2, height/2);
  
  beginShape();
  
  for(i = 0; i < numberVertexes; i++){
  
  let x = sin(angle)*radius;
    
  let y= cos(angle)*radius;
    
  stroke(50);
  strokeWeight(2);
  vertex(x,y);
    angleVelocity+=1;
   // console.log(angleVelocity);
    angle+=angleVelocity;
  
  
  

  
  
  
  } 
      
  endShape();

 
  
}