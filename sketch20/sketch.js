let r=50
let angle=0;
let time=0;


function setup() {
  createCanvas(500, 500);
}



function draw() {
  background(23, 120, 163);
  
   for(let j=0; j< height/r; j++){
  
  for(let i=0; i< width/r; i++){
  
      const xAngle = map(mouseX, 0, width, -4 * PI, 4* PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      const angle = (xAngle * (i/width) + yAngle * (j/height)*8);

      // each particle moves in a circle
    let bigX = i*r;
    let bigY = j*r;
    
    
    
    
    let x=bigX+r*cos(TWO_PI/time-angle)*3;
    let y=bigY+r*sin(TWO_PI*time+angle)*3;
    
     //translate(width/2,height/2);
   noFill();
   stroke(125) ;
   ellipse(bigX,bigY,r*3);
    
    
    const colorVal= map(angle,-1,1,-2,2);
    const rVal= 0.5-tan(colorVal*20.0)*10;
    const gVal= 0.5-tan(colorVal*13.0)*70;
    const bVal= 0.5-cos(colorVal*20.0)*66;
    
    
    
    
    
    
    
    
    
    
    
//    let x=bigX+r*cos(TWO_PI*time=angle);
//    let y=bigY+r*sin(angle);
 
  fill(rVal,gVal,bVal);
  ellipse(x,y,r/4);
    
  
}
}
  
  time+=0.01
  
  
}