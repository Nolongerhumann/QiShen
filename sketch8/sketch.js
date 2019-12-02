
let beat;
let fft;

function preload(){
  
 beat= loadSound("train.mp3");
}

function setup(){
  createCanvas(1024,400);
  noFill();
beat.loop();
beat.rate(1); 
  
fft= new p5.FFT();
  
  spectrum= fft.analyze();
  // console.log(spectrum);
  // console.log(spectrum.length);

}

function draw(){
  background(20,80,140);
  
   spectrum= fft.analyze();

beginShape();
  for(let i=0; i<spectrum.length; i++){
  fill(random(200),random(60),random(200))
  let valueToMap;
    strokeWeight(1);
    stroke(255,255,255);
    
//     if(i>20){
//     valueToMap = map(spectrum[i],0,280,150,400);
//     }else{
//     valueToMap = spectrum[i]
//     }
  // xVal=map(i,0,spectrum.length, 0, width/2);
  // yVal= map(spectrum[i],0,70, height,0);
    // ellipse(i*10, height/2, 80, spectrum[i]);
    rect(i*15,height/2.5,spectrum[i],random(180))
   
    
    
    
    
  }
endShape()


}