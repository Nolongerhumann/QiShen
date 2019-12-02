let myBubble, myBubble2;
let bubbles = [];
function setup() {
  createCanvas(400, 400);
  
  
  // myBubble = new Bubble(100,100,50,[220,40,190]);
  // myBubble2 = new Bubble(300,100,100,[20,190,70]);
  // bubbles = [myBubble, myBubble2];
  // console.log(myBubble, myBubble2);
  // console.log(myBubble.x);
  
  
  for(let i = 0; i < 100; i++){
  
    bubbles[i] = new Bubble(random(width), random(height), random(200), [random(255), random(255), random(255)], random(5));
  }
  
  
  
}

function draw() {
  background(220,200,200);
  
for(let i =0; i < bubbles.length; i++){
  bubbles[i].move();
  bubbles[i].display();
}
}



function Bubble(x, y, size, color, speed){
  this.x = x;
  this.y = y;
  this.size = size;
  this.color = color;
  this.speed = speed

  this.display = function(){
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  
  }
  
  this.move = function(){
    if(this.x > width || this.x < 0) {
      this.speed = this.speed * -1;
    }
    this.x = this.x + this.speed;
  
    }


}