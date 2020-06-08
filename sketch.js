var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(255,255,255);  
  
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=colour(80,80,80);
  car.velocityX=speed;
  if(Car.collides(wall)){ (deformation=0,5*weight*speed*speed)/22500
  }
  
  drawSprites();}
