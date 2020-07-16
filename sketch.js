  var car,obstacle;
  var speed,weight;


function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  obstacle=createSprite(1300, 200, 60,height/2);
  car=createSprite(50,150,50,50);
  car.shapeColor="red";
  car.velocityX=speed;
 
}

function draw() {
  background(255,255,255);  
  
  //car.bounceOff(obstacle);
  if(obstacle.x-car.x < (car.width+obstacle.width)/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;
    if (deformation>180){
      car.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }
  }
  
  drawSprites();
}