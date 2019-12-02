
let counter = 0;
let angle = 0;
let numColors = 2;
let colors = [[122, 214, 137],[237, 179, 43]];

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(187, 255, 69);
 // myShape();
  
  for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
  push()
  scale(0.5);
    translate(i*80, j*80);
   // translate(0,j*50);
    translate(0, random(0,35));  
    
  myCircle(angle);
  pop()  
}
 }
angle++
}


function myCircle(angle){


  fill(colors[int(random(numColors))])
  
  beginShape()
    vertex(0,0);
  
  for(let i = 0; i < 90; i++){
      let radius = 10*random(5,10);
      let x = sin(angle/80*2*i) * radius;
      let y = cos(angle/100*i) * radius;
     vertex(random(x,x+200), y+200); 
  }
  
  endShape(CLOSE);


}







function myShape(){

  fill(colors[int(random(numColors))])
  
  beginShape()
    vertex(0,40);
for(let i = 0; i < 9; i++){
  
 vertex(random(0,300), random(100,300)); 
}
  
  endShape(CLOSE);

}