let ball1, ball2, ball3, ball4, ball5;
let counter = 0;

function setup() {
  createCanvas(400, 400);
  ball1 = new Ball(random(width),random(height),40,random(-5,5),random(-5,5));
  ball2 = new Ball(random(width),random(height),40,random(-5,5),random(-5,5));
  ball3 = new Ball(random(width),random(height),40,random(-5,5),random(-5,5));
  ball4 = new Ball(random(width),random(height),40,random(-5,5),random(-5,5));
  ball5 = new Ball(random(width),random(height),40,random(-5,5),random(-5,5));
}

function draw() {
  background(48,63,8);
  
  ball1.bounce();
  ball1.move();
  //ball1.render(); 
  //ball1.hit();
  ball1.display();
  
  ball2.bounce();
  ball2.move();
  ball2.display();
  //ball2.hit();  
  //ball2.render(); 
  ball3.bounce();
  ball3.move();
  ball3.display();
  //ball3.render(); 
  //ball3.hit(); 
  ball4.bounce();
  ball4.move();
  ball4.display();
  //ball4.render();  
  //ball4.hit(); 
  ball5.bounce();
  ball5.move();
  ball5.display();
  //ball5.render();
  //ball5.hit(); 

}

// function mousePressed () {
// ball1.reverse();
// ball2.reverse();
// ball3.reverse();
// ball4.reverse();
// ball5.reverse();
//  }



  function Ball(x, y, size, speed,color) {
    this.x = x;
    this.y = y;
    this.size= size;
    this.speedx = speed;
    this.speedy = speed;
    this.env=new p5.Envelope();
    this.env.setADSR(0.01,0.1,0.2,0.6);
    this.env.setRange(0.2,0);
    this.osc=new p5.Oscillator();
    this.osc.setType ('sine');
    this.osc.amp (this.env);
    this.osc.start();
    this.color = color
    
    this.display = function(){
     strokeWeight(5)
     stroke(255, 0, 0);
     fill(30,25,68);
     ellipse(this.x, this.y, 50, 50);
    }
    
  
 
    


this.bounce = function() {

    if (this.x > width || this.x < 0) {
      this.speedx = this.speedx * -1;  
      this.playSound();
    }

    if (this.y > height || this.y < 0) {
      this.speedy = this.speedy * -1;  
      this.playSound();}
  }

  this.move = function() {
    this.x += this.speedx;
    this.y += this.speedy;
  }


//  this.reverse= function () {
//       this.speedx = this.speedx * -1;

//       this.speedy = this.speedy * -1;
//  }
  

  this.playSound = function(){
      this.osc.freq(random(200,1000));
    this.env.play();
}
  }  