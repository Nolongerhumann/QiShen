var squareSize = 5;
var counter = 0;
var numSquares;
var xStart = 0;
var yStart = 0;

var colors = [];
var numColors = 10000;

var  img2,img3;

var particles = [];
var numParticles = 1000;
var theta = 0;
var inc = 0.1;


function preload(){

	// img1 = loadImage('download.jpg');
  // img2 = loadImage('download-1.jpg');
  img3 = loadImage('V.jpg');
  
}


function setup() {
  createCanvas(800, 400);
  frameRate(40);
  //noLoop();
  numSquares = width/squareSize;
  //numSquares = 4;
  for(var i =0; i < numColors; i++){
  		colors[i] = [random(250),0,0];
  		//particles[i] = 0;
  }
  
  img3.loadPixels();
  // img2.loadPixels();
  
  
  for(var j=0; j < numSquares; j++){  
    for(var i = 0; i < numSquares; i++){
      // fill(colors[int(random(0,colors.length-1))]);
      
      	var thisColor = img3.get(i*3,j/3);
      	 var thatColor = img3.get(i/3,j*3);
        var chosenColor;
           
      var choice = random(90);
      
      if(choice> 30){
       chosenColor = thisColor;
      } else {
     
      chosenColor = thatColor;
      }
      
      squareSize = random(2,5);
      var a = new Particle(i*squareSize, j*squareSize, 2*squareSize, chosenColor);
      
      particles.push(a);
     rect(xStart + (i/squareSize), yStart+(j*squareSize), squareSize, squareSize);
    }
	} 
  
 //console.log(particles);
  
  
}

function draw() {
//  background(220);
  //background(img1);
  
  // stroke(255);
  // strokeWeight(1);
  noStroke();
 
	
 
    for(var i = 0; i < particles.length; i++){
      
     // particles[i*j].update(theta);
      
      // console.log(particles[1]);
      
      particles[i].display();
    }
  
  
  
 // image(img1, 0, 0, 400, 400)
  theta+=inc
}



var Particle = function(x,y,size,col){
	this.x = x;
  this.y = y;
  this.size = size;
  this.color = col;

  
  this.update = function(theta){
    this.x = this.x+sin(theta)/random(20);
    this.y = this.y+sin(theta)/random(5);
  }
  
  this.display = function(){
    // stroke(90,20,random(30));
    noStroke();
    strokeWeight(random(60));
    fill(this.color);
    this.size = random(this.size-2,this.size+2);
    rect(this.x, this.y, this.size,this.size);
  }
  
  
  

}