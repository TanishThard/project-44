var rocket,rocketImage;
var fireball,fireballImage;

function preload(){
rocketImage=loadImage("rocket.png");
fireballImage=loadImage("fireball.jpg");
}

function setup() {
  createCanvas(1000, 500);
  rocket=createSprite(350,350,100,100);
  rocket.addImage(rocketImage);
  rocket.scale=0.3;
  fireball=createSprite(750,350,100,100);
  fireball.addImage(fireballImage);
  fireball.scale=0.14;
}

function draw() {
  background(0);  
  
  drawSprites();
}


