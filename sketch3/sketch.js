let diameter = 50;
let xBegin = 0;
let yBegin = 0;
//let color1= [220,90,90];
let color1 = [35, 200, 180];
let color2 = [67, 90, 456];
let color3 = [90, 80, 116];
let color4 = [69, 90, 380];
let x = diameter;
let y = diameter;
let counter = 0;
let numberCircles = 10;
//let addX= 0;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(80,120,50);




  for (let i = 0; i < numberCircles; i++) {
   for(j=0; j<numberCircles; j++){
    let x=diameter * i;
    let y=diameter*j;
     
    if(i%2==0){
      rotationVal =PI;
      addX =diameter/2;
      
      thisColor =color4;
    }else{
      rotationVal = 0;
      addX = 10;
      thisColor = color3;
    }
     
     if(j%2==0){
       
       
       rotationVal=rotationVal + PI/2;
       thisColor = color1;
     }else{
       rotationVal = rotationVal-PI*2;
       thisColor = color1;
       
     }
  
     // x=x+addX;
     
    push()
    
    
    translate(x, y); 
    rotate(rotationVal+counter/100+PI);
    translate(-x, -y);

    fill(color1);
    arc(x, y, diameter, diameter, 0, PI);
    fill(color2);
    arc(x , y, diameter, diameter, PI, TWO_PI);
    pop();
    
    
  }
    //translate(x,y);
    //scale(1.55);
    //fill(color1);
    // arc(x,y,diameter,diameter,0,PI);
    //fill(color2);
    //arc(x,y,diameter,diameter,PI,TWO_PI);
 counter+=0.7
  
}
}