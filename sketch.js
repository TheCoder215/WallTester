var bullet;
var wall;
var speed, weight;
var thickness;
var damage;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  wall = createSprite (1200,200,thickness, 280);
  bullet = createSprite(200, random(75,325), 20, 10);
  bullet.shapeColor = ("#D7BE69");
  bullet.velocityX = speed

}

function draw() {
  background("black"); 
 

collide(bullet,wall);

  
  
  
  drawSprites();
}

function collide(ob1,ob2){
  if(ob2.x - ob1.x <= ob2.width/2 + ob1.width/2){
damage = (0.5*speed*speed*weight)/(thickness*thickness*thickness)  
   if(damage<10){
    wall.shapeColor = ("green");
  }

  if(damage>=10) {
    wall.shapeColor = ("red");
  }
  
      bullet.velocityX = 0;
      bullet.visible = false;
}
else {
  wall.shapeColor = ("white");
}
}
