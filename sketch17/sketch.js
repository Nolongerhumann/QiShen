
let img;
let copy;
let angle=0;



function preload(){
img= loadImage("sketch17/A.jpg")

}




function setup() {
  createCanvas(img.width,img.height);
  pixelDensity(1);
  
  copy=createImage(img.width,img.height);

}


  function draw(){
    
    img.loadPixels();
    copy.loadPixels();
    //console.log(img.pixels.length/4);
  
   for(let x=0;x<width;x++){
   for(let y=0;y<height;y++){
  
  //get every location in each square
     let location= (x+y*width)*4;
     
     let r= img.pixels[location];
     let g= img.pixels[location+1];
     let b= img.pixels[location+2];
     let a= img.pixels[location+3];
     
     let centerX=width/2
     let centerY=height/2
     
     let distanceFromCenter=dist(mouseX,mouseY,centerX,centerY);
     // let addR=map(distanceFromCenter,0,500,0,100);
     let addR=map(sin(angle),-1,1,0,200);
     
     r=r+addR;
     g=g-random(addR);
     b=r;
     
     // img.pixels[location]=random(x);
     // img.pixels[location+1]=random(20);
     // img.pixels[location+2]=random(y);
     // img.pixels[location+3]=random(2);
  
      copy.pixels[location]=random(x);
     copy.pixels[location+1]=random(20);
     copy.pixels[location+2]=random(y);
     copy.pixels[location+3]=random(2);
  
//      copy.pixels[location]=r;
//      copy.pixels[location+1]=g;
//      copy.pixels[location+2]=b;
//      copy.pixels[location+3]=a;
  
     
     angle+=0.01
     
   }
  }
 
  
  img.updatePixels();
    copy.updatePixels();
  image(copy,0,0);
}