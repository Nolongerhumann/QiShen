let angleZ = 0;
let numCubes = 39;
let numRows = 8;
let zVal=1;
let xVal=1;
function setup() {
  createCanvas(500, 500, WEBGL);
  strokeWeight(1)
  stroke("blue")
  //noStroke();

}

function draw() {
  background(20,20,20);
  
  ambientLight(250,250,250);
  ambientMaterial(300);
  
  shininess(20);
  
//   let xVal=sin(zVal);
//   rotate(zVal);
  
  //just the usual for loop here
  for(let j=0;  j<numRows; j++){
   for(let i =0; i < numCubes; i++){
  
    
    push();
    //the location of each cube is determined by this translate function
    //notice how it is wrapped in its own individual transformation matrix
    //by the enclosing push() / pop()
    //translate( -200+i*200, 250-( j*50)*zVal, -10*zVal);
     translate(-1000 + i*50, 250-j*79*zVal, -10*zVal);
     // scale(10,j,10);
  
    //each sphere rotates on its own axis 
    // because these rotations are also inside the push()/pop()
    rotateY(PI/1.4);
    rotateZ(angleZ);
    ambientMaterial(255);
    box(20);
   pop();
    
  }
    
     if (zVal < 0.8 || zVal > 2.8){
  speed *= -1
  }
  }
  
  
  xVal-=0.1
  
  
  
  angleZ+=0.09
}