
let s = '去你妈的花海。'
var squareSize = 5;
var counter = 0;
var numSquares;
var xStart = 0;
var yStart = 0;

var colors = [];
var numColors = 10;

var img1, img2,img3,img4;

var particles = [];
var numParticles = 5;
var theta = 0;
var inc = 0.1;


function preload(){

	img3 = loadImage('A.jpeg');
  img4 = loadImage('B.jpg');
}


function setup() {
  createCanvas(800, 800);
  frameRate(20);
  //noLoop();
  numSquares = width*2/squareSize;
  //numSquares = 4;
  for(var i =0; i < numColors; i++){
  		colors[i] = [random(80),0,150];
  		//particles[i] = 0;
  }
  scale(0.6);
  img3.loadPixels();
  img4.loadPixels();
  
  
  for(var j=0; j < numSquares; j+=12){  
    for(var i = 0; i < numSquares; i+=20){
       // fill(colors[int(random(0,colors.length-1))]);
      
      	var thisColor = img3.get(cos[i*3],j/2);
      	var thatColor = img4.get(i,j/2);
        var chosenColor;
           
      var choice = random(80);
      
      if(choice> 90){
       chosenColor = thisColor;
      } else {
     
      chosenColor = thatColor;
      }
      
      //squareSize = random(2,5);
      var a = new Particle(i*squareSize, j*squareSize, squareSize, chosenColor);
      
      particles.push(a);
     // rect(xStart + (i*squareSize), yStart+(j*squareSize), squareSize, squareSize);
    }
	} 
  
 //console.log(particles);
  
  
}

function draw() {
 
fill(3);

  //background(img4);
  //background(img1);
  
   stroke(255);
  strokeWeight(2);
 // noStroke();
 
	
 
    for(var i = 0; i < particles.length; i++){
      
     // particles[i*j].update(theta);
      
      // console.log(particles[1]);
      
      particles[i].display();
    }
  scale(1.5)
  textSize(80);
  stroke("white");
text(s, 0,height/2.96, 70, 80);
  
 // image(img1, 0, 0, 400, 400)
  theta+=inc
}



var Particle = function(x,y,size,col){
	this.x = x;
  this.y = y;
  this.size = size;
  this.color = col;

  
  this.update = function(theta){
    this.x = this.x+sin(theta)/random(80);
    this.y = this.y+cos(theta)/random(5);
  }
  
  this.display = function(){
    stroke(30,20,random(90));
    strokeWeight(random(8));
    fill(29,39,7);
    stroke("orange")
    scale()
    this.size = random(this.size+2,this.size+2);
    rect(random(this.x), random(this.y), random(this.size-2),10);
  }
  
  
  

}