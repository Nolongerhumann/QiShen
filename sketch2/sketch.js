function setup() {
  createCanvas(400, 400);
  //document.getElementsByTagName("canvas")[0].setAttribute("id", "canvasid");

  background(86,24,200);
  
  
}

  
function draw(){

  background(random(120),98,random(200));
  for(let i=0; i < 4; i++) {
  
    for(let j=0; j < 5; j++){
  equilateralTriangle(100*i, 100*j);
    
  
    }
  
    }
  
  // translate(0,100);
  //   equilateralTriangle(100);
  // equilateralTriangle(200);
  // equilateralTriangle(300);
  // equilateralTriangle(0);


}


function equilateralTriangle(x, y){
  strokeWeight(2);
  stroke(random(24,600), 2,180);
  fill(random(500),random(688,30),545);
  beginShape();
    vertex(x,y);
    vertex(x+334,y-1010);
    vertex(x+50,y-86.6);
    quadraticVertex(x-10,y-10,x+200,y+10);
    //vertex(150,random(0,150));
  endShape(CLOSE);
  
}

