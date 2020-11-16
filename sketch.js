var bullet;
var wall;
var speed, weight;
var thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83)

  wall = createSprite (1200,200,thickness, 280);
  wall.shapeColor = ("white");

  bullet = createSprite(200, random(75,325), 20, 10);
  bullet.shapeColor = ("#D7BE69");
  bullet.velocityX = 30

}

function draw() {
  background("black"); 
 

  if((0.5*speed*speed*weight)/(thickness*thickness*thickness)<10 
  && collide(bullet, wall)){
    wall.shapeColor = ("green");
  }

  if((0.5*speed*speed*weight)/(thickness*thickness*thickness)>=10 
  && collide(bullet, wall)) {
    wall.shapeColor = ("red");
  }
  
  drawSprites();
}

function collide(ob1,ob2){
  if(ob1.x - ob2.x < ob2.width/2 + ob1.width/2
    && ob2.x - ob1.x < ob2.width/2 + ob1.width/2){

      bullet.velocityX = 0;
      bullet.visible = false;
    }
}
