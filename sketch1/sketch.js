function setup() {
  var canvas = createCanvas(400, 400);

  //document.getElementsByTagName("canvas")[0].setAttribute("id", "canvasid");
  canvas.parent('sketch-holder');
  background(86,24,200);


  
  shapes()
  
  
  
  // translate(0,100);
  //   equilateralTriangle(100);
  // equilateralTriangle(200);
  // equilateralTriangle(300);
  // equilateralTriangle(0);


}

function mouseClicked() {
  shapes()
  
}

function shapes() {
  equilateralTriangle(100,100);
  equilateralTriangle(200,100);
  equilateralTriangle(300,100);
  equilateralTriangle(0,100);
  
    equilateralTriangle(100,200);
  equilateralTriangle(200,200);
  equilateralTriangle(300,200);
  equilateralTriangle(0,200);
  
   equilateralTriangle(100,300);
  equilateralTriangle(200,300);
  equilateralTriangle(300,300);
  equilateralTriangle(0,300);
  
   equilateralTriangle(100,400);
  equilateralTriangle(200,400);
  equilateralTriangle(300,400);
  equilateralTriangle(0,400);
  
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
