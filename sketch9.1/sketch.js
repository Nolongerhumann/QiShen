let angle = 0;
let numCircles = 12;
let yodel;
let fft;

function preload(){
 yodel = loadSound('yodel.mp3');

}


function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  yodel.rate(1.0);
  yodel.loop();
  
  fft= new p5.FFT();
  
  
}

function draw() {
  spectrum= fft.analyze();
  
  background(220,200,30);
  translate(width/2,height/2);
 
  for(let i=0; i<360/numCircles; i++){
     let valueToMap;
      
      strokeWeight(5);
      stroke(i, 0, 120);
      //stroke(255,0,0);
       let radius =100;
    let x=radius*cos(angle);
    let y=radius*sin(angle);
//       if(i > 20){
//         valueToMap = map(spectrum[i], 0, 255, 150,400);
//       } else {
//         valueToMap = spectrum[i]
//       }
      
     // fill(spectrum[i],200,200);
    
    
     strokeWeight(9);
      //fill(20,20,20);
    
     push();
    translate(x,y);
     rotate(i*12+90);
     translate(-x,-y);
      ellipse(x, y, 59, spectrum[i]);
     
     pop();
    
    // ellipse(x,y,10);
    //angle ++
    angle = angle + numCircles;
  
  }  
}