var img;
var img2;

var mic;

function setup(){
  createCanvas(windowWidth,windowHeight);
  img = loadImage("assets/5g.png");
    img2 = loadImage("assets/4g.png");
        img3 = loadImage("assets/6g.png");



  
    imageMode(CENTER);
    mic = new p5.AudioIn()
    mic.start();

  
}

function draw(){
    micLevel = mic.getLevel();
    var reactive = micLevel*2500;

  var grow = map(mouseX,0,width,0,900);
    
    push();
    translate(width*.5,height*.5);
    rotate(radians(frameCount));
    image(img,0,0,250+reactive,250 + reactive);
    pop();
    
    
     push();
    translate(width*.2,height*.2);
    rotate(radians(frameCount));
    image(img2,0,0,250+reactive,250 + reactive);
    pop();
    
    
      push();
    translate(width*.8,height*.8);
    rotate(radians(-1*frameCount));
    image(img3,0,0,150+reactive,250 + reactive);
    pop();
    
  
}

