let circles= []
let numCircles= 15;
let walls = [];
let num =60;
let mx = [];
let my = [];
let fft
let sounds = [];

let a = 0.0;
let s = 0.0;
let numberSounds = 7;


function preload(){
 drum1 = loadSound('drum1.mp3');
 drum2 = loadSound('drum2.mp3');
 drum3 = loadSound('drum3.mp3');
 drum4 = loadSound('drum4.mp3');
bass1 = loadSound('bass1.mp3');
  piano = loadSound('piano.mp3');
  p1 = loadSound('p1.mp3');
   p2 = loadSound('p2.mp3');
   C1 = loadSound('C1.mp3');
  C2 = loadSound('C2.mp3');
//guitar1= loadSound('guitar1.mp3');
  //guitar2= loadSound('guitar2.mp3');
  guitar3= loadSound('guitar3.mp3');
  guitar4= loadSound('guitar4.mp3');
  sounds = [drum1,C1,drum2,drum3,drum4,bass1,C2];
  
  
  
}

 fft= new p5.FFT();


function setup() {
  createCanvas(1000,1000);
  // drum1.loop();
  // drum2.loop();
  // drum3.loop();
  // bass1.loop();
  // noStroke();
  stroke('#fc6060');
  strokeWeight(7);
  fill(0,0,0);
  for (let i = 0; i < num; i++) {
    mx.push(i);
    my.push(i);
  }
  
  for(let i =0; i <numCircles; i++){
  circles[i] = new Circle(random(150, width - 150), random(150, height-150),random(160,100),[random(255),random(255),random(255)], sounds[i%numberSounds], guitar4);
    
    for(let i =0; i <walls; i++){
   walls[0] = new Wall(0+10, 0+10, width-10, 0+10); 
   walls[1] = new Wall(width-10, 0+10, width-10, height - 10);
  walls[2] = new Wall(width-10, height -10, 0+10, height - 10);
  walls[3]= new Wall(0+10, height , 0 + 10, 0 + 10);
  
    }

  
  
  }
}

function draw() {
  background(255, 200, 0);
  

   for(let i =0; i <numCircles; i++){
     
     circles[i].checkWalls();
     circles[i].checkMouse();
     circles[i].move();
     circles[i].display();
   }  
     
  // for(let i = 0; i < 4; i++){ 
  //    // walls[i].display();
  // }
     //if()
  let which = frameCount % num;
  mx[which] = mouseX;
  my[which] = mouseY;


  
     
     
  
   for (let i = 0; i < num; i++) {
    // which+1 is the smallest (the oldest in the array)
    let index = (which + 1 + i) % num;
     
     
   ellipse(mx[index], my[index], i, i);
  
  }
  
  //ellipse(mx, my, num)
}

function Circle(x,y,size,col, snd, osnd){

  this.x=x;
  this.y=y;
  this.size=size;
  this.col =col;
  this.xSpeed=random(-3,3);
  this.ySpeed=random(-3,3);
  this.reversing = false;
  this.reverseCounter = 0;
  this.snd = snd;
  this.otherSound = osnd;
  this.move=function(){
  
//     if(this.xSpeed > 1.0){this.xSpeed -= 0.05;}
//     if(this.xSpeed < -1.0){this.xSpeed += 0.05;}
    
//     if(this.ySpeed > 1.0){this.ySpeed -= 0.05;}
//     if(this.ySpeed < -1.0){this.ySpeed += 0.05;}

    // this.xSpeed-=0.1;
    // this.ySpeed-=0.1;
    
    if (this.reverseCounter > 0 ){
      this.reverseCounter -=1;
      }
    
    if(this.reverseCounter <  2){
      this.reversing = false;
      }
    
    
    
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;
  
  }
  
  this.display=function(){
    
  fill(this.col);
  ellipse(this.x,this.y,this.size);
  
  }
  
  this.checkWalls=function(){
  
  if(this.x < this.size||this.x > width - this.size ){
    this.xSpeed*= -1;
    this.playSound();
  }
  if(this.y < this.size||this.y > height - this.size ){
    this.ySpeed*= -1;
    this.playSound();
  }  
  
  
  }
  
  
  
  this.checkMouse = function(){
      
    if( mouseX - num/2 > this.x - this.size/2 && mouseX + num/2  < this.x + this.size/2 && mouseY + num/2 > this.y - this.size/2 && mouseY - num/2  < this.y +this.size/2 && !this.reversing){
      this.reversing = true;
      this.reverseCounter = 20;
      this.xSpeed*= -1;
       this.ySpeed*= -1;
      this.playAnotherSound();
    
    } 
  
   }
  
  
  this.playSound = function(){
  
    this.snd.play();
  
  }  
  
  this.playAnotherSound = function(){
  
    this.otherSound.play();
  
  }



}