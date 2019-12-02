let circles= []
let numCircles= 100;


function setup() {
  createCanvas(600, 600);
  
  
  for(let i =0; i <numCircles; i++){
  circles[i] = new Circle(random(50, width - 50), random(height),random(5,100),[random(255),random(255),random(255)])
  
  
  }
}

function draw() {
  background(255,1
            );
   for(let i =0; i <numCircles; i++){
     
     circles[i].checkWalls();
     circles[i].move();
     circles[i].display();
     
     //if()
     
   
   }
  
}

function Circle(x,y,size,col){

  this.x=x;
  this.y=y;
  this.size=size;
  this.col =col;
  this.xSpeed=random(-3,3);
  this.ySpeed=random(-3,3);
  
  this.move=function(){
  this.x = this.x + this.xSpeed;
  this.y = this.y + this.ySpeed;
  
  }
  
  this.display=function(){
    
  fill(this.col);
  ellipse(this.x,this.y,this.size);
  
  }
  
  this.checkWalls=function(){
  
  if(this.x < this.size||this.x > width - this.size - 50){this.xSpeed*= -1;}
  if(this.y < this.size||this.y > height - this.size - 50){this.ySpeed*= -1;}  
  
  
  }
  
  
  
  
  
  
  



}