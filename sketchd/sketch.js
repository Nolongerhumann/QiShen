let angle=0;
let angle2= 0;
let radius= 100;
let resolution=15;
let xAngle=0;
let heightColumn=10


function setup() {
  createCanvas(400, 400,WEBGL);
}



function draw(){ 
  orbitControl();
  pointLight(250,250,250,100,10,50);
  background(60,40,60);
  stroke("white")
  
//   rotateX(xAngle)
//   rotateY(xAngle*2)
//   rotateZ(xAngle/10)
  
  
  for(let j=0; j<resolution; j++){
  for(let i=0; i<resolution; i++){
  
//   let x= radius*cos(angle);
//   let y= radius*sin(angle);
 let x= radius* sin(angle)*cos(angle2);
let y= radius* sin(angle)*sin(angle2);  
 let z=radius*cos(angle)*cos(angle);   
    
    
    
    
    
    push();
    translate(x,y,z);
    fill(70,40,40,0)
    sphere(20);
    pop();
    
    angle+=TWO_PI/resolution
    angle2+=PI/resolution 
  // sphere(20,6,2);
  }
      
  }
xAngle+=0.01

angle2+=PI/resolution 
  
  
  
  
  
  
  
  
  
  
}