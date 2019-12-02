let circles= []
let numCircles= 100;
let fft

function preload(){
 guitar = loadSound('guitar.mp3');}

 fft= new p5.FFT();


function setup() {
  createCanvas(600, 600);
  guitar.loop();
  
  
  for(let i =0; i <numCircles; i++){
  circles[i] = new Circle(random(50, width - 50), random(height),random(5,100),[random(255),random(255),random(255)])
  
  
  }
}

function draw() {
  background(255,255,25,5);
  
  
  spectrum = fft.analyze();
  
  for(let i=0;i<numCircles/2;i++){
 
    circles[i].checkWalls();
    circles[i].update(spectrum[i]);
    
    circles[i].display();

  }
  

}






function Circle(x,y,size,col){
this.x=x;
  this.y=y;
  this.size=size;
  this.col=col;
  
  this.xSpeed=random(-3,3);
  this.ySpeed=random(-4,4);
  
  this.display=function(){
  
    fill(random(this.col));
  ellipse(this.x,this.y,this.size);
  
  }
  
  
  
  this.update=function(input){
  
    
    this.col = [input, 230,300];
    this.oldSize = cos(this.size)
    if(input > 80){
      this.size = this.size + 1;
    } else {
      this.size = this.oldSize;
     // this.size = this.size -100;
    }
  this.x=this.x+this.xSpeed;
    this.y=this.y+this.ySpeed;
  
  }


  
  this.checkWalls=function(){

if(this.x >width-this.size||this.x<this.size){this.xSpeed=this.xSpeed *-1;}
  if(this.y>height-this.size||this.y<this.size){this.ySpeed=this.ySpeed*-1;}


}

  playSound=function(){
  
  guitar.play()}
 
  


}