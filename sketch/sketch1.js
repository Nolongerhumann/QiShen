let img,bg;
let angle=0;
let myGraphic;

function preload(){
img= loadImage("d.jpg");
bg= loadImage("e.jpg");




}





function setup() {
  createCanvas(400, 400,WEBGL);
  noStroke();
  
 myGraphic= createGraphics(200,200);
   myGraphic.background(200,20,300);
    myGraphic.fill(200,20,300);
     myGraphic.ellipse(width/2,height/2,200);
  
  
  
  
}

function draw() {
  background(255);
  
  pointLight(255,255,255,100,100,100);
  //color,color,color x,y,z
  texture(bg);
  rect(-200,-200,400,400);
  
  rotateY(angle);
  rotateZ(angle);
  texture(img);
  sphere(100);
  angle+=0.01;
  
  
  
 
}