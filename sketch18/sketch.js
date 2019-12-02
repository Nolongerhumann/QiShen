let angle= 6
function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  
  translate(width/2,height);
  
  branch(80);

}

function mouseClicked() {
  ellipse(mouseX, mouseY, 5, 5);
  // prevent default
  return false;
}


function branch(length){
  stroke("white")
line(0,0,0,-length);
translate(0,-length);  
// stroke("white")
 fill(2, 154, 196); 
ellipse(0,0,5);
  let theta=random(0.9,0.9);
length*=random(0.5,0.9);

  if (length>3){
   push() 
    
  rotate(angle+theta);  
    rotate(random(-angle,angle));   
    branch(length);
    pop()
    push()
    
    scale(1);
    rotate(angle+theta);   
    branch(length);
    pop()
 
    
    
  }

}